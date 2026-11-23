import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB CONNECTION SUCCESS : ${conn.connection.name}`)
        return true
    } catch (error) {
        console.log(`ERROR IN DB CONNECTION : ${error.message}`)
        return false
    }
}

export default dbConnection