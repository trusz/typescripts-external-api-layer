import { ID, MS } from "../../x/types";

export class Recording {
    constructor(
        public id: ID,
        public title: string,
        public isVideo: boolean,
        public length: MS,
    ){}
}
