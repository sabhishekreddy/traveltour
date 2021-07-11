import client from './client.js';
import FirstInFirstOut from './Allocations/FirstInFirstOut.js';
import express from 'express';
var app = express()
var prioritizer = false;
var priorityipaddress = [];
var priorityclients = [];

app.get('/home', (req, res) => {

  var ip = req.socket.remoteAddress;
  var p = req.query['p']

  if (priorityipaddress.includes(ip)) {
    res.send("Your connection is prioritized");
  } else {
    if (ipaddresses.includes(ip) || (servingipaddresses.includes(ip))) {
      if (!servingipaddresses.includes(ip)) {
        res.send("You are not allowed to visit website please come again after sometime");
      } else {
        res.send("You are welcome to enter the website");
      }
    } else {
      i++; j++;
      var t = new Date();
      if (p == 'priority') {
        console.group("priority");
        priorityclients.push(new client(req.socket.remoteAddress, t.getDate(), t.getMonth() + 1, t.getFullYear(), t.getHours(), t.getMinutes(), t.getSeconds()));
        priorityipaddress.push(req.socket.remoteAddress);
        console.log(priorityclients);
      } else {
        clientsArray.push(new client(req.socket.remoteAddress, t.getDate(), t.getMonth() + 1, t.getFullYear(), t.getHours(), t.getMinutes(), t.getSeconds()))
        ipaddresses.push(req.socket.remoteAddress);
      }
      FirstInFirstOut(prioritizer, clientsArray, ipaddresses, servingClients, servingipaddresses, 4);
      console.log(servingClients, clientsArray);
      res.send("Connection created");
    }
  }
})

app.listen(1337, () => {
  console.log('listening');
})

var j = -1;
var i = -1;
var ipaddresses = [];
var clientsArray = [];
var servingipaddresses = [];
var servingClients = [];

//Random request data generation
clientsArray.push(new client('127.0.0.9', 24, 6, 2021, 11, 59, 30));
ipaddresses.push('127.0.0.9');
clientsArray.push(new client('127.0.0.2', 24, 6, 2021, 11, 45, 30));
ipaddresses.push('127.0.0.2');
clientsArray.push(new client('127.0.0.3', 24, 6, 2021, 11, 47, 43));
ipaddresses.push('127.0.0.3');
clientsArray.push(new client('127.0.0.4', 24, 6, 2021, 11, 50, 24));
ipaddresses.push('127.0.0.4')
clientsArray.push(new client('127.0.0.5', 24, 6, 2021, 11, 52, 11));
ipaddresses.push('127.0.0.5');
clientsArray.push(new client('127.0.0.6', 24, 6, 2021, 11, 52, 45));
ipaddresses.push('127.0.0.6');
clientsArray.push(new client('127.0.0.7', 24, 6, 2021, 11, 45, 23));
ipaddresses.push('127.0.0.7');
clientsArray.push(new client('127.0.0.8', 24, 6, 2021, 11, 46, 54));
ipaddresses.push('127.0.0.8');


