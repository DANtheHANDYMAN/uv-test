import createServer from '@tomphttp/bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';


const bare =  createServer('/bare/');
// const bare = createServer("bare");
const serve = new nodeStatic.Server('static/');

const server = http.createServer();

server.on('request', (req, res) => {
    if (bare.shouldRoute(req)) {
		bare.routeRequest(req, res);
		//console.log(bare)
	} else {
		serve.serve(req, res);
	}
});

server.on('upgrade', (req, socket, head) => {
	if (bare.shouldRoute(req, socket, head)) {
		bare.routeUpgrade(req, socket, head);
	}else{
		socket.end();
	}
});

server.listen({
	// port: process.env.PORT || 8080,
	// port: process.env.PORT || 5000,
	// port: process.env.PORT || 5001,
	// port: process.env.PORT || 5002,
	// port: process.env.PORT || 5003,
	// port: process.env.PORT || 5004,
	// port: process.env.PORT || 5005,
	// port: process.env.PORT || 5006
	// port: process.env.PORT || 5007
	// port: process.env.PORT || 5008
	// port: process.env.PORT || 5009
	// port: process.env.PORT || 5010
	// port: process.env.PORT || 5011
	// port: process.env.PORT || 5012
	port: process.env.PORT || 5013





});