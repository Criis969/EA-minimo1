import {IPersona} from "../models/Persona";
import Persona from "../models/Persona";

export async function getPersona(id: string) {
    return Persona.findById(id).catch((error: any) => {
        console.error("Error finding persona", error);
    });
}

export async function getAllPersonas() {
    return Persona.find().catch((error: any) => {
        console.error("Error finding personas", error);
    });
}

export async function updatePersona(persona: IPersona, personaId: string) {

    return Persona.findByIdAndUpdate(
        personaId ,
        persona, { useFindAndModify: false }
    )
        .then((result : any) => {
            console.log("Persona cambiada");
        })
        .catch((error : any) => {
            console.error("Error editando persona con id: " + personaId, error);
        });
}

