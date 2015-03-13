Andrei PRIVET!

Instructia de lucru.

cppRequest.js - programa din c++ care face zapros la serveru tau node
nodeServer.js(portul 3000 pentru http, portul 3001 pentru socket.io)- serverul node care prineste de la c++ si face broadcast la toti clientii. 
apacheServer.js (portul 3002 pentru http) - este important fisierul index.html care se conecteaza prin socket.io la portul nodeServer.js si primeste info


1. zapustesti 3 console
   node apacheServer.js
   node nodeServer.js
   a treilea pentru cppRequest.js (oleacaa mai incolo)

2. in browser te unesti la apacheServer print http://localhost:3002
3. in a treilea console dai drumul la 
   node cppRequest.js

4. in browser vezi un alert ca message o venit si in consola vezi postul in cppRequest.js
