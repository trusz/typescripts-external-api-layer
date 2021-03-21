import * as types from 'runtypes';

import { Artist } from "../../album-lister/artist";
import { ID } from "../../x/types";


export interface ResponseArtist{
    id: ID;
    name: string;
    score: unknown;
}

export const TypeResponseArtist = types.Record({
    id: types.String,
    name: types.String,
    score: types.Unknown,
});


export function ArtistFromResponseArtist(ra: ResponseArtist): Artist {
    return new Artist(
        ra.id,
        ra.name,
    )
}
