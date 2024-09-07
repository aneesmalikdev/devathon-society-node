import cors from 'cors';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import express from 'express';
import routes from './modules/index.js';
import Logger from './utils/logger.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('../public'));
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}
app.use('/api', routes);
app.get('/', (req, res) => {
    res.send('Get Ready');
});
app.listen(process.env.PORT, () => {
    Logger.success(`App listening on port ${process.env.PORT}`);
});
