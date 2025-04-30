const serverless = require('serverless-http');
const cors = require("cors");

const postReq = require("../methods/postReq");
const deleteReq = require("../methods/deleteReq");
const getReq = require("../methods/getReq");

const handler = async (event, context) => {
    const method = event.httpMethod;
    const path = event.path;

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS'
    };

    if (method === 'OPTIONS') {
        return {
            statusCode: 200,
            headers
        };
    }

    try {
        switch (method) {
            case 'GET':
                return await getReq(event);
            case 'POST':
                return await postReq(event);
            case 'DELETE':
                return await deleteReq(event);
            default:
                return {
                    statusCode: 405,
                    headers,
                    body: JSON.stringify({ error: 'Method not allowed' })
                };
        }
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};

exports.handler = handler;