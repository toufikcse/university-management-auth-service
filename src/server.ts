import mongoose from 'mongoose';
import config from './config/index';
import app from './app';

async function connectDatabase() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('Database successfully connected');

        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

connectDatabase();
