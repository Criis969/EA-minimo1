import mongoose from 'mongoose';
import {mongodb} from './keys'

const connect = async () => {
    await mongoose.connect(mongodb.URI)
        .then(() => {
            console.log("Connected to the DB");
        })
        .catch((error) => {
            console.log("DB connection error ");
        })
}

export default connect;