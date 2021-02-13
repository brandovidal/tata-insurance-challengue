import express, { static } from 'express'
import { join } from 'path'

const app = express()
const port = process.env.PORT || 8080

// Serve only the static files form the dist directory
app.use(static(`${__dirname}/build`))

app.get('/*', function (req, res) {
  res.sendFile(join(`${__dirname}/build/index.html`))
})

// Start the app by listening on the default port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
