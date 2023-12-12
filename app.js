const express = require("express");

const reqIP = require('request-ip');

const app = express();

app.get("/",(req,res)=>{

 switch(req?.query?.method){
  case 'remote-address':
   res.send(req.socket.remoteAddress)
   break;
  case 'ip':
   res.send(req.ip)
   break;
  default:
   res.send(reqIP.getClientIp(req))
   break;
 }

})

app.listen(process.env.PORT || 3000)
