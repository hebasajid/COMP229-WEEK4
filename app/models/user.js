import mongoose  from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const {PassportLocalSchema} = mongoose; //extracting a schema injected into mongoose by passport-local-mongoose
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String

},{
    timestamps:true,
    collection:'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User',UserSchema);
