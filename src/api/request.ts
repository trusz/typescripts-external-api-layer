import fetch from 'node-fetch'

export async function fetchGET(url: string): Promise<unknown> {
    const resp = await fetch(url, {
        headers: { 'Accept': 'application/json' },
    });


    let respBody: any;
    let json: unknown;
    try{
        respBody = await resp.text();
        json = JSON.parse(respBody);
    }catch(err){
        console.error(`msg='could not convert response to json' err='${err}' body='${respBody}'`)
    }
    
    return json;
}