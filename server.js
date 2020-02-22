const express = require('express')
const app = express()
const path = require('path')
const port= 3000

app.get('/fridge.html', (req,res) =>{ 
    res.sendFile(path.join(__dirname+'/fridge.html'));
});

app.get('/', (req,res) =>{ 
    res.sendFile(path.join(__dirname+'/cooking.html'));
});

app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"]
    res.json(list)
    
})
app.listen(port,()=> console.log(`Example app listening on port ${port}!`))