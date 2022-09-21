import { createContext, useEffect, useReducer } from "react";
import { IPaginacion, IProductoPaginacion } from "../../../Domain/Models";
import { ProductoService } from "../../../Domain/Service";

interface IProps{
    children: JSX.Element | JSX.Element[]
}

type ProductoAction =
    | { type: 'UpdatePaginacion', payload: IProductoPaginacion};

export type ProductoContextProps = {
    ProductoState: IProductoPaginacion;
    HandlePreviousLL: () => void;
    HandlePrevious: () => void;
    HandleFollowing: () => void;
    HandleFollowingLL: () => void;
    HandleFilter: ( NumberFilter: number ) => void; // 0 ASC 1 DESC
}

const InitialState: IProductoPaginacion = {
    paginacion:{
        numeroPagina : 1,
        registrosPagina : 10,
        numeroPaginas : 0,
        filter: 0
    },
    productos: []
}

export const ProductoContext = createContext<ProductoContextProps>({} as ProductoContextProps);

const ProductoReducer = (State: IProductoPaginacion, Action: ProductoAction): IProductoPaginacion => {
    switch(Action.type)
    {
        case 'UpdatePaginacion':
            return { ...State, ...Action.payload }
        default:
            return State;
    }
}

export const ProductoProvider = ({ children } : IProps) => {
    
    const [State, Dispatch] = useReducer(ProductoReducer, InitialState);

    useEffect(() => {
        GetAllProducto(State.paginacion);
    },[])

    const handlePreviousLL = () =>{
        GetAllProducto(InitialState.paginacion);
    }

    const handlePrevious = () =>{
        GetAllProducto({
            ...State.paginacion,
            numeroPagina: State.paginacion.numeroPagina - 1
        });
    }

    const handleFollowing = () =>{
        GetAllProducto({
            ...State.paginacion,
            numeroPagina: State.paginacion.numeroPagina + 1
        });
    }

    const handleFollowingLL = () =>{
        GetAllProducto({
            ...State.paginacion,
            numeroPagina: State.paginacion.numeroPaginas
        });
    }

    const handleFilter = (NumberFilter: number) => {
        GetAllProducto({
            ...State.paginacion,
            filter: NumberFilter
        });
    }

    const GetAllProducto = (Paginacion: IPaginacion) => {
        ProductoService.GetAll(Paginacion)
        .then( (data : any) => {
            if(data.success){
                Dispatch({ 
                    type: 'UpdatePaginacion', 
                    payload: {
                        paginacion: data.data.paginacion,
                        productos: data.data.producto
                    } })
            }else{
                alert(data.mensaje)
            }
        })
        .catch((error) => {
            alert(error)
        })
        .finally( () => {
        })
    }

    return(
        <ProductoContext.Provider value={{
            ProductoState: State, 
            HandlePreviousLL: handlePreviousLL,
            HandlePrevious: handlePrevious,
            HandleFollowing: handleFollowing,
            HandleFollowingLL: handleFollowingLL,
            HandleFilter: handleFilter
        }}>
            {children}
        </ProductoContext.Provider>
    )
}