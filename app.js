const express = require('express')
const app = express()
const port = 80

app.get('/health', (req, res) => {
  res.send("Ok. Thanks");  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
