import * as fetch from 'node-fetch'

export async function fetchGET(url: string): Promise<unknown> {
    const resp = await fetch(url);
    const json = await resp.json();
    
    return json;
}