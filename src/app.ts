import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { Request, Response } from 'express';

// Controllers
import homeController from './controllers/home';
import instrController from './controllers/instr';

//
class App {

	public app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	// Setup Config
	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
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
	}
}

export default new App().app;
