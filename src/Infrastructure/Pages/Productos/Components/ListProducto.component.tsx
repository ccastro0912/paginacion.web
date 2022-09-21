import { useContext } from "react";
import { IProducto } from "../../../../Domain/Models";
import { ProductoContext } from "../Producto.context";
import { ItemProducto } from "./ItemProducto.component";
import Paginacion from "./Paginacion.component";
import styles from "./ListProducto.module.css";

export default function ListProducto(){

    const { ProductoState } = useContext(ProductoContext);

    return <div className={styles["collection"]}>
        <div className={styles["product-gv"]}>
            <div className={styles["grid"]}>
                { 
                    ProductoState.productos.map((product: IProducto) => {
                        return <ItemProducto key={product.pkid} Product={product}/>
                    })
                }
            </div>
        </div>
        <Paginacion/>
    </div>
}