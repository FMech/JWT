const express = require("express")
const bodyParser = require("body-parser")
const secretKey="fahara"
const jwbt = require('jsonwebtoken')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const data = [
    {
        film: "and then there were none",
        year: 1997,
    }, {
        film: "gone with the wind",
        year: 1995,

    },
]


app.get("/data/:id",  (req, res) => {
    if(req.params.id == secretCode ){
        res.json(data)
    }else{
        res.json({err: "vous n'etes pas autorisé pour effectuer cette tache "})
    }
});
  
function createToken(req,res,next){
    const user = {username:req.body.username}
    jwbt.sign(user,secretKey,(err,result)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json({token:result})
        }
 
    });
    next();
}

app.post('/login',createToken,(req,res)=>{});
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("the server is working")
});