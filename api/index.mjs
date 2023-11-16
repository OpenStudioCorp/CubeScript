// when GET requested, return a list of all the routes in the API directory in json format
import { readdirSync } from 'fs';
import { join } from 'path';

export default async (request, response) => {
    const routes = readdirSync(join(process.cwd(), 'api')).map((file) => {
        return {
            route: `/api/${file.replace('.mjs', '')}`,
            name: file.replace('.mjs', ''),
        };
    });

    response.status(200).json({ routes });
};
