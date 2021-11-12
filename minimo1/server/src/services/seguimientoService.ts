import {ISeguimiento} from "../models/Seguimiento";
import Seguimiento from "../models/Seguimiento";


export async function getSeguimiento(id: String) {
    return Seguimiento.findById(id).catch((error: any) => {
        console.error("Error finding seguimiento", error);
    });
}

export async function createSeguimiento(seguimiento: ISeguimiento) {
    return Seguimiento.create(seguimiento).catch((error: any) => {
        console.error("Error creating seguimiento", error);
    });
}


/*export async function addStudent(idSubject: String, subject: ISeguimiento) {
    return Seguimiento.findByIdAndUpdate(
        idSubject, subject, {useFindAndModify: false}).catch((error: any) => {
        console.error("Error finding subject", error);
    });
}*/
