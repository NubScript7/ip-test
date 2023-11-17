const express = require("express");

const reqIP = require('request-ip');

const app = express();

app.set('trust proxy', true)

app.get("/",(req,res)=>{

 let clip = reqIP.getClientIp(req);

 res.send([
  req.socket.remoteAdress,
  req.ip,
  req.ips,
  clip
 ])

})

app.listen(process.env.PORT || 3000)
