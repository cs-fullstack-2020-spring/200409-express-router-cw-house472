let express= require('express')
let app = express();

let portNumber = 8880
//import router modules from routes files
let api=require('./routes/api.js');
let admin= require ('./routes/admin.js')

//mount routes
app.use('/api', api);
app.use('/admin', admin)
//create listener
app.listen(portNumber, ()=>{
    console.log({portNumber})
})