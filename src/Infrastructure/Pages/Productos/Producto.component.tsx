import styles from './Producto.module.css';
import ListProducto from './Components/ListProducto.component';
import { ProductoProvider } from './Producto.context';
import FilterProducto from './Components/FilterProducto.component';

export default function Producto(){
    
    return( 
        <div className={styles["content"]}>
            <ProductoProvider>
                <div className={styles["header"]}>
                    <h1 className={styles["title-header"]}>Productos</h1>
                    <div className={styles["filter"]}>
                        <FilterProducto/>
                    </div>
                </div>
                <div className={styles["container"]}>
                    <ListProducto/>
                </div>
            </ProductoProvider>
        </div>
    )
}