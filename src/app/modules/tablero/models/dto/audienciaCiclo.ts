import { audiencia } from "./audiencias";
import { partes } from "./partes";

export class audienciaCiclo {
    audiencias: audiencia = new audiencia;
    tiempo: number = 0;
    partes: partes[] = [];
}