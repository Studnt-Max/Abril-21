import { Circulo, Cubo, Triangulo } from "../../types/db/Geometric";

const circuloDB: Circulo[] = [{pi:3.14159,radio:5}]
const cuboDB: Cubo[] = [{longitudCubo:3}]
const trianguloDB: Triangulo[] = [{cateto1:4,cateto2:3}]

class GeometricService {
    async getAreaCirculo(pi:number, radio:number): Promise<Circulo[]> {
        return circuloDB
    }

    async getLongitudCubo(LongitudCubo:number): Promise<Cubo[]> {
        return cuboDB
    }
    async getLongitudTriangulo(LongitudTriangulo:number): Promise<Triangulo[]> {
        return trianguloDB
    }
}