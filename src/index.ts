import app from './app';
import config from './config'

const server = app.listen(config.port, (err) => {
	if(err) { return console.log(err) }
	return console.log(`Server is listening on ${config.port}`);
});

export default server;