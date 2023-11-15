import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('./update.json', 'utf8'));

export function getUpdate(query: string) {
    const result = data.filter((update: any) => update.id === query || update.version.includes(query) || update.date === query);

    if (result.length === 0) {
        return `No updates found for query: ${query}`;
    }

    return result;
} 