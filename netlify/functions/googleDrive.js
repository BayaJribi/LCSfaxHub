require('dotenv').config();
const { google } = require('googleapis');
const path = require('path');
// Path to the Service Account JSON key file

privateKey=process.env.PRIVATE_KEY.replace('"', '');
// Authenticate using Service Account credentials
let auth;
try {
    auth = new google.auth.GoogleAuth({
        credentials: {
            type: process.env.TYPE,
            project_id: process.env.PROJECT_ID,
            private_key_id: process.env.PRIVATE_KEY_ID,
            private_key: privateKey.replace(/\\n/g, '\n'),
            client_email: process.env.CLIENT_EMAIL.replace(',', ''),
            client_id: process.env.CLIENT_ID,
            auth_uri: process.env.AUTH_URI,
            token_uri: process.env.TOKEN_URI,
            auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT_URL,
            client_x509_cert_url: process.env.CLIENT_CERT_URL,
        },
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    console.log('GoogleAuth initialized successfully');
} catch (error) {

    console.error('Error initializing GoogleAuth:', error.message);
}



// Google Drive API client
const drive = google.drive({ version: 'v3', auth });

// Function to list files in a specific Google Drive folder
async function listFilesInFolder(folderId) {
    try {
        const response = await drive.files.list({
            q: `'${folderId}' in parents`,
            fields: 'files(id, name, mimeType, webViewLink)',
        });

        return response.data.files; // Return the list of files
    } catch (error) {
        console.error('Error fetching files:', error.message);
        throw new Error('Failed to fetch files from Google Drive');
    }
}

module.exports = {
    listFilesInFolder,
};
