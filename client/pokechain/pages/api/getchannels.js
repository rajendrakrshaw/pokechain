import { client } from '../../lib/client'

const query = `*[_type == "conversation" && isDm==false] {
    roomId,
    roomName,
    "avatar": image.asset->url
}`

export default async (req, res) => {
    try {
        const sanityResponse = await client.fetch(query)

        res.status(200).send(sanityResponse)
    } catch (error) {
        coonsole.error(error)
        res.status(500).send(error)
    }
}