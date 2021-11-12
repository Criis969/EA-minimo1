import mongoose, {Schema, model}  from "mongoose";


export interface IPersona extends mongoose.Document{
    name: String;

}
const PersonaSchema = new Schema({
    name : {
        type: String,
        required: true
    }
});

export default model<IPersona>('Persona', PersonaSchema);