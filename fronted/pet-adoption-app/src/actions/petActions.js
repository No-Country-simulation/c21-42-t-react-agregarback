import { PET } from "../types";

export const sendPetInformation = (petInformation) => ({ type: PET, payload: petInformation });