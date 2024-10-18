require('dotenv').config(); // Load environment variables
const axios = require('axios');

// Function to get a new access token using refresh token
async function getAccessToken() {
    const refreshToken = process.env.REFRESH_TOKEN;
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;

    const tokenUrl = 'https://oauth2.googleapis.com/token';

    // Prepare the form data
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('refresh_token', refreshToken);
    params.append('grant_type', 'refresh_token');

    try {
        const response = await axios.post(tokenUrl, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.data.access_token; // Return the new access token
    } catch (error) {
        if (error.response) {
            console.error('Error refreshing access token:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Error refreshing access token:', error.message);
        }
        throw new Error('Failed to refresh access token');
    }
}

// Function to list files in a specific Google Drive folder
async function listFilesInFolder(folderId) {
    const accessToken = await getAccessToken(); // Get the latest access token

    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&fields=files(id,name,mimeType,webViewLink)`; // Include webViewLink in fields

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data.files; // Return the list of files
    } catch (error) {
        console.error('Error fetching files:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
        throw new Error('Failed to fetch files from Google Drive');
    }
}

module.exports = {
    getAccessToken,
    listFilesInFolder,
};
