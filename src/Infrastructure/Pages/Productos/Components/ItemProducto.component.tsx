import { IProducto } from '../../../../Domain/Models';
import styles from './ItemProducto.module.css';

interface IProps{
    Product: IProducto
}

export const ItemProducto = (Props: IProps) => {
    return <div className={styles["product-item"]}>
        <div className={styles["img-product"]}>
            <img 
            src={`${'https://api.lorem.space/image/shoes'}`} 
            className={styles["img-responsive"]} 
            alt="Nike Dunk Low  FOSSIL ROSE"/>
        </div>
        <div className={styles["info-product"]}>
            <h3 className={styles["title-product"]}>{Props.Product.nombre}</h3>
            <p className={styles["price-product"]}>S/. {Props.Product.precio}</p>
        </div>
    </div>
}