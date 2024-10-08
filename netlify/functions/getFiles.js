// netlify/functions/getFiles.js
const { listFilesInFolder } = require('./googleDrive'); // Import the function

exports.handler = async function(event, context) {
    const folderId = event.queryStringParameters.folderId; // Get folderId from query parameters

    if (!folderId) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Folder ID is required' }),
        };
    }

    try {
        const files = await listFilesInFolder(folderId); // Call the function to list files
        console.log('Files retrieved:', files); // Log the files for debugging
        return {
            statusCode: 200,
            body: JSON.stringify(files), // Return files as JSON
        };
    } catch (error) {
        console.error('Error in getFiles handler:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }), // Return error message
        };
    }
};
