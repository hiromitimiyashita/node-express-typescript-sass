import express, { Request, Response } from 'express';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true})); // { ! }
server.use(mainRoutes);
// server.use('/', mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

const { MYSQL_DB, MYSQL_NAME, MYSQL_PASSWORD, MYSQL_PORT } = process.env;

server.listen(MYSQL_PORT); 