import fs from 'fs';

export default async (request, response) => {
    const updateData = fs.readFileSync('../src/update.json');
    const updateJson = JSON.parse(updateData);

    const highestId = Math.max(...updateJson.map(item => item.id));

    response.status(200).send(JSON.stringify({ highestId }));
};