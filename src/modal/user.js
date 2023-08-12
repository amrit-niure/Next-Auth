import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
},{timestamps : true})

// checks if there is any user model if not creates the model 
const User = mongoose.models.User || mongoose.model('User',userSchema)

export default User