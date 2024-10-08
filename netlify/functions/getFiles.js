// netlify/functions/getFiles.js
const { google } = require('googleapis');

exports.handler = async function(event, context) {
    const drive = google.drive('v3');

    const folderId = '1S8eD60XlY2Zwvm65CP3BzDS5QdlsEyIx'; // Replace with your folder ID

    // Use your OAuth2 credentials
    const auth = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URI
    );

    // Set the refresh token
    auth.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

    try {
        // Refresh the access token if needed
        const tokenResponse = await auth.getAccessToken();
        const accessToken = tokenResponse.token; // Get the new access token
        auth.setCredentials({ access_token: accessToken, refresh_token: process.env.REFRESH_TOKEN });

        // List files in the specified folder
        const response = await drive.files.list({
            auth,
            q: `'${folderId}' in parents`,
            fields: 'files(id, name, mimeType, webViewLink)',
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data.files),
        };
    } catch (error) {
        console.error('Error fetching files:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
