import { Artist } from "../../album-lister/artist";
import { fetchGET } from "../request";
import { urlArtist } from "../urls";
import { ArtistFromResponseArtist, ResponseArtist, TypeResponseArtist } from "./artist";
import { ID } from "../../x/types";


export async function fetchArtist(artistId: ID, includeRecording: boolean = false): Promise<Artist | undefined> {
    const url = urlArtist(artistId, includeRecording);
    const resp = await fetchGET(url)
    
    let artistResp: ResponseArtist
    try{
        artistResp = TypeResponseArtist.check(resp);
    } catch(err){
        console.error(`msg='type check failed at "fetchArtist"' err='${err}'`)
        return undefined
    }

    const artist = ArtistFromResponseArtist(artistResp)

    return artist;
}
