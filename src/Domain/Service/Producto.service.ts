import { IPaginacion } from "../Models";
import { HTTP } from "./Http.service";

export const ProductoService = {
    GetAll: (Paginacion: IPaginacion) => {
        return HTTP.POST('Producto/GetAll', Paginacion, {})
    }
}