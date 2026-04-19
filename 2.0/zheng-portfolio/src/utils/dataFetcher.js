// Fetching a JSON file
// Returns an array of objects
export default async function fetchJSONData(path) {
    try {
        const res = await fetch(path);
        if (!res.ok) {
            const txt = await res.text().catch(() => '');
            const err = new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
            console.error(err.message, txt);
            throw err;
        }

        // parse JSON using the Fetch API helper (throws on invalid JSON)
        return await res.json();
    } catch (error) {
        console.error('Failed to load or parse JSON at', path, error);
        return null;
    }
}