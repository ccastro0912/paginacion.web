import { IPaginacion } from "./paginacion.model";
import { IProducto } from "./producto.model";

export interface IProductoPaginacion{
    paginacion: IPaginacion
    productos: IProducto[]
}