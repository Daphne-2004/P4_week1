import mongoose from "mongoose";
const connectdatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connnected to mongoDB`);
      } catch (error) {
        console.error(`ERROR: ${error.message}`);
        process.exit(1);
      }
} ;
 export default connectdatabase;