import mongoose from "mongoose";

const connectDb = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("MONGODB_URI is not defined in the environment variables.");
        process.exit(1); // Exit the process with a failure code
    }

    try {
        await mongoose.connect(uri)
        console.log("mongo db uri", uri);
        console.log("Database connected successfully")
        }
    
         catch (error) {
        console.error("Database connection error:", error);
    }
};

export default connectDb;
