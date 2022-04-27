import express from 'express'
import Gun from 'gun'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 9000

app.use(cors())

app.serve(Gun.serve)

app.get('/', (_, res)=>{
    res.status(200).send('> DEBUG: Pokechain Node is Live.')
})

const server = app.listen(port, ()=>{
    console.log(`> DEBUG: Pokechain Node is listening at http://localhost:${port}`)
})

Gun({ web: server})
