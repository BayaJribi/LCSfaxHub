require('dotenv').config();
const { google } = require('googleapis');
const path = require('path');

// Path to the Service Account JSON key file
const KEY_PATH = path.join(__dirname, '../../.service-account-key.json');
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

// Authenticate using Service Account credentials
const auth = new google.auth.GoogleAuth({
    keyFile: googleApiKey,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

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
