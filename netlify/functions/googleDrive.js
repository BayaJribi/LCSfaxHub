// List files in a specific Google Drive folder using the API key
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

async function listFilesInFolder(folderId) {
    try {
        // Direct API request to Google Drive using the API key
        const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&fields=files(id,name,mimeType,webViewLink)&key=${googleApiKey}`);
        const data = await response.json();

        if (response.ok) {
            return data.files; // Return the list of files
        } else {
            throw new Error(data.error.message || 'Failed to fetch files');
        }
    } catch (error) {
        console.error('Error fetching files:', error.message);
        throw new Error('Failed to fetch files from Google Drive');
    }
}

export default listFilesInFolder;
