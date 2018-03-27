import app from './app';

const port = 1234;

const server = app.listen(port, (err) => {
	if(err) { return console.log(err) }
	return console.log(`Server is listening on ${port}`);
});

export default server;