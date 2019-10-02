const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) => res.send(`
  <input type="button" value="Big Button" style="margin: auto; position: absolute; width: 200px; height: 50px; top: 0; right: 0; bottom: 0; left: 0; border-radius: 10px; color: white; background-color: cornflowerblue;">
`))

app.get('/healthcheck', (req, res) => {
  return res.status(200).send('OK')
})

app.listen(port, () => console.log(`cm-app listening on port ${port}`))