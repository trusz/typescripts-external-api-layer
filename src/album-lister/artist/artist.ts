import { ID } from "../../x/types";
import { Recording } from "../recording";

export class Artist {

    constructor(
        public id: ID,
        public name: string,
        public recordings: Recording[] = [],
    ){}
}