import { useContext } from 'react';
import { ProductoContext } from '../Producto.context';
import styles from './FilterProducto.module.css';

export default function FilterProducto(){

    const { 
        HandleFilter
    } = useContext(ProductoContext);

    return(
        <div className={styles["filter"]}>
            <button type="button" className={styles["btn-filter"]} onClick={() => HandleFilter(0)}>Precio, menor a mayor</button>
            <button type="button" className={styles["btn-filter"]} onClick={() => HandleFilter(1)}>Precio, mayor a menor</button>
        </div>
    )
}