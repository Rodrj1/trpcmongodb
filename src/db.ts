import mongoose from 'mongoose';

const URI = 'mongodb+srv://rodriccrz:test123@trpcmongo.mccenjp.mongodb.net/?retryWrites=true&w=majority';

export const connectToDb = async () => {
  try {
    mongoose.set('strictQuery', false);
    const db = await mongoose.connect(URI);
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
  }
};
