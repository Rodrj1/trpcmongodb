import app from './app';
import { connectToDb } from './db';

connectToDb();
app.listen(3000);

console.log('server on port', 3000);
