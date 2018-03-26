import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as path from 'path';

import { Request, Response } from 'express';
import mongoose = require('mongoose');

// Controllers
import homeController from './controllers/home';
import instrController from './controllers/instr';
import processController from './controllers/process';
import taskController from './controllers/task';

//
class App {

	public app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
		this.db();
	}

	// Setup Config
	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(express.static(path.join(__dirname, '../public')));
		this.app.use(session({
			secret: 'this-is-a-secret-token', // FIXME!
			cookie: { maxAge: 60000 }
		}));
		this.app.set('views', path.join(__dirname, '../views'));
		this.app.set('view engine', 'ejs');
	}	

	// Setup Routes
	private routes(): void {
		const router = express.Router();

		// Home
		router.get('/', homeController.get);
		router.post('/', homeController.post);
		this.app.use('/', router);

		// Instr
		router.get('/instr', instrController.get);
		this.app.use('/instr', router);

		// Process
		router.post('/process', processController.post);
		this.app.use('/process', router);

		// Task
		router.get('/task', taskController.get);
		this.app.use('/task', router);

	}

	// Setup DB
	private db(): void {
		let mongoDB = 'mongodb://127.0.0.1/arb_access';
		mongoose.connect(mongoDB);
		mongoose.Promise = global.Promise;
		let db = mongoose.connection;
	}
}

export default new App().app;
