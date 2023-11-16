import * as fs from 'fs';
import pkg from '@vercel/node';
const { VercelRequest, VercelResponse } = pkg;
import path from 'path';
import rateLimit from 'express-rate-limit';

async function getUpdate(id) {
    const data = JSON.parse(fs.readFileSync('./src/update.json', 'utf8'));
    
    const result = data.find((update) => String(update.id) === id);
    if (!result) {
        return `No updates found for id: ${id}`;
    }

    return result;
}

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10, // limit each IP to 10 requests per windowMs
    message: { error: 'Too many requests, please try again later.' },
    keyGenerator: function (req) {
      return req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    }
  });

export default async (request, response) => {
    return new Promise((resolve, reject) => {
      limiter(request, response, (result) => {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }).then(async () => {
    try {
        const query = request.query.query;
        const result = await getUpdate(query);
        if (!result) {
            response.status(404).send({ error: 'No updates found for this id' });
        } else {
            response.setHeader('Content-Type', 'application/json');
            response.status(200).send(JSON.stringify(result, null, 4));
        }
    } catch (error) {
        response.status(500).send({ error: 'An error occurred while processing your request' });
    }
    }
    );
}

export { limiter };
