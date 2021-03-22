import * as types from 'runtypes';

import { Artist } from "../../album-lister/artist";
import { ID } from "../../x/types";
import { RecordingFromResponseRecording, ResponseRecording, TypeResponseRecording } from '../recording/recording';


export interface ResponseArtist{
    id: ID;
    name: string;
    score: unknown;
    recordings?: ResponseRecording[];
}

export const TypeResponseArtist = types.Record({
    id: types.String,
    name: types.String,
    score: types.Unknown,
    recordings: types.Array(TypeResponseRecording).Or(types.Undefined),
});


export function ArtistFromResponseArtist(ra: ResponseArtist): Artist {
    return new Artist(
        ra.id,
        ra.name,
        ra.recordings?.map(RecordingFromResponseRecording),
    )
}
