import { StringDate } from "../x/types"
import * as types from 'runtypes'

export interface ResponesBase {
    created: StringDate;
    count: number;
    offset: number;
}

export const TypeResponseBase = types.Record({
    created: types.String,
    count: types.Number,
    offset: types.Number,
});
