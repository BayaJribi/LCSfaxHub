const { listFilesInFolder } = require('./googleDrive');

exports.handler = async function(event) {
    const folderId = event.queryStringParameters.folderId;

    if (!folderId) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Folder ID is required' }),
        };
    }

    try {
        const files = await listFilesInFolder(folderId);
        return {
            statusCode: 200,
            body: JSON.stringify(files),
        };
    } catch (error) {
        console.error('Error in getFiles handler:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to fetch files',
                details: error.message,
            }),
        };
    }
};
