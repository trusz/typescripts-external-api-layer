import { inspect } from "util";
import { fetchArtist } from "../api/artist/fetch-artist-by-id";
import { searchArtistsByName } from "../api/artist/search-artist";

export class App {

    async run() {
        const nirvanaBands = await searchArtistsByName("Nirvana")
        console.debug(inspect(nirvanaBands, true, 10))
        const requests = nirvanaBands.map(band => {
            const includeRecording = true
            return fetchArtist(band.id,includeRecording)
        })
        const artistsWithRecordings = await Promise.all(requests)
        console.debug(inspect(artistsWithRecordings, true, 10))
    }
}