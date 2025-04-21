import { Circulo } from "../../../types/db/Geometric";

export interface geometricService {
    getAreaCirculo(pi:number, radio:number): Promise<Circulo>;
    getLongitudCubo(LongitudCubo:number): Promise<number>;
    getLongitudTriangulo(LongitudTriangulo:number): Promise<number>
}