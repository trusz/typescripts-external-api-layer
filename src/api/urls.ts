
const basesUrl = "https://musicbrainz.org/ws/2/"
const urls = {
    artits: 'artist'
}

export function urlArtistSearch(artistName: string): string {
    const url = new URL(urls.artits,basesUrl);

    url.searchParams.set('query',artistName)

    return url.toString()
}