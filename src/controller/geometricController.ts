import { Circulo } from "../../types/db/Geometric";
import { geometricService } from "../db/types/dbService";

export class GeometricController {
    private dbService : geometricService;

    constructor(dbService: geometricService) {this.dbService = dbService}

    async getCirculoArea(pi:number, radio:number): Promise<Circulo>{
        return this.dbService.getAreaCirculo(pi,radio);
    }

    async getLongitudCubo(LongitudCubo:number): Promise<number>{
        return this.dbService.getLongitudCubo(LongitudCubo);
    }

    async getLongitudTriangulo(LongitudTriangulo:number): Promise<number>{
        return this.dbService.getLongitudTriangulo(LongitudTriangulo);
    }
}