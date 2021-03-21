import { Artist } from "../../album-lister/artist";
import { fetchGET } from "../request";
import { ResponesBase, TypeResponseBase } from "../response-base";
import { urlArtistSearch } from "../urls";
import { ArtistFromResponseArtist, ResponseArtist, TypeResponseArtist } from "./artist";
import * as types from 'runtypes';

interface ResponseSearchArtists extends ResponesBase {
    artists: ResponseArtist[]
}

export const TypeResponseSearchArtists = types.Intersect(
    TypeResponseBase,
    types.Record({
        artists: types.Array(TypeResponseArtist)
    })
);

export async function searchArtistsByName(artistName: string): Promise<Artist[]> {
    const url = urlArtistSearch(artistName);
    const resp = await fetchGET(url)
    
    let searchResp: ResponseSearchArtists
    try{
        searchResp = TypeResponseSearchArtists.check(resp);
    } catch(err){
        console.error(`msg='type check failed for ResponseSearchArtists' err='${err}'`)
        return []
    }

    const artists = searchResp.artists.map(ArtistFromResponseArtist)

    return artists;
}
