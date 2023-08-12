import mongoose from 'mongoose'

const connectionDB = () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        )
        console.log("Database Connected...")
    } catch (err) {
        console.log(`${err} did not connect`)
    }
}

export default connectionDB
