const express = require('express')

const app = express()
const port = 4000
app.get("/saludo", (req, res)=>{

    res.json({msg:"hola express"})

})

app.listen(port, ()=>{
    console.log(`servidor conectado en el puerto: ${port}`)
})
