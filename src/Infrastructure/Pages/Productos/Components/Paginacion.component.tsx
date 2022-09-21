import { useContext } from 'react';
import { ProductoContext } from '../Producto.context';
import styles from './Paginacion.module.css';

export default function Paginacion(){

    const { 
        ProductoState ,
        HandlePreviousLL,
        HandlePrevious,
        HandleFollowing,
        HandleFollowingLL 
    } = useContext(ProductoContext);

    return <div className={styles["paginator"]}>
        {ProductoState.paginacion.numeroPagina > 1 ? 
            <>
                <button type="button" className={styles["arrow"]} onClick={HandlePreviousLL}>
                    <span className={styles["angle-arrow"]}>&#171;</span>
                </button>
                <button type="button" className={styles["arrow"]} onClick={HandlePrevious}>
                    <span className={styles["angle-arrow"]}>&#8249;</span>
                </button>
            </>
            :
            <>
                <button type="button" className={styles["arrow"]}>
                    <span className={styles["angle-arrow"]}>&#171;</span>
                </button>
                <button type="button" className={styles["arrow"]}>
                    <span className={styles["angle-arrow"]}>&#8249;</span>
                </button>
            </>
        }
        <span className={styles["paginator-pages"]}>
            <button type="button" className={styles["paginator-pages"]}>{ProductoState.paginacion.numeroPagina}</button>
        </span>
        {ProductoState.paginacion.numeroPagina < ProductoState.paginacion.numeroPaginas ? 
            <>
                <button type="button" className={styles["arrow"]} onClick={HandleFollowing}>
                    <span className={styles["angle-arrow"]}>&#8250;</span>
                </button>
                <button type="button" className={styles["arrow"]} onClick={HandleFollowingLL}>
                    <span className={styles["angle-arrow"]}>&#187;</span>
                </button>
            </>
            :
            <>
                <button type="button" className={styles["arrow"]}>
                    <span className={styles["angle-arrow"]}>&#8250;</span>
                </button>
                <button type="button" className={styles["arrow"]}>
                    <span className={styles["angle-arrow"]}>&#187;</span>
                </button>
            </>
        }
    </div>
}