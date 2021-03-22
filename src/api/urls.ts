import { ID } from "../x/types";

const basesUrl = "https://musicbrainz.org/ws/2/"
const urls = {
    artits: 'artist'
}

export function urlArtistSearch(artistName: string): string {
    const url = new URL(urls.artits,basesUrl)

    url.searchParams.set('query',artistName)

    return url.toString()
}

export function urlArtist(artistId: ID, includeRecording: boolean = false): string {
    const url = new URL(`${urls.artits}/${artistId}`,basesUrl)

    if (includeRecording){
        url.searchParams.set('inc','recordings')
    }

    return url.toString()
}