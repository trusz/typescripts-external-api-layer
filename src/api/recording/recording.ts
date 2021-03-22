import * as types from 'runtypes';

import { Recording } from '../../album-lister/recording';
import { ID } from "../../x/types";


export interface ResponseRecording{
    id: ID;
    title: string;
    length: number;
    video: boolean;
    disambiguation: unknown;
}

export const TypeResponseRecording = types.Record({
    id: types.String,
    title: types.String,
    length: types.Number,
    video: types.Boolean,
    disambiguation: types.Unknown,
});


export function RecordingFromResponseRecording(rr: ResponseRecording): Recording {
    return new Recording(
        rr.id,
        rr.title,
        rr.video,
        rr.length,
    )
}
