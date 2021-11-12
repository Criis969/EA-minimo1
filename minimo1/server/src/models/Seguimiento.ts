import mongoose, {Schema, model}  from "mongoose";
import {ObjectId} from "mongodb"

export interface ISeguimiento extends mongoose.Document{
    fecha : Date;
    dni : String;
    phone : String;
    fiebre: String;
    tosContinuada: String;
    dificultadRespiratoria : String;
    malestarGeneral: String;
    persona : ObjectId;
}
const SeguimientoSchema = new Schema({
    fecha : {
        type: Date,
        required: true
    },
    dni : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    fiebre : {
        type: String,
        required: true
    },
    tosContinuada : {
        type: String,
        required: true
    },
    dificultadRespiratoria : {
        type: String,
        required: true
    },
    malestarGeneral : {
        type: String,
        required: true
    },
    persona : {
        type: ObjectId,
        required: true
    }
});

export default model<ISeguimiento>('Seguimiento', SeguimientoSchema);