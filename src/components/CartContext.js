import  { useContext , createContext, useState} from 'react'
import Swal from 'sweetalert2'

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)

export const CartContextProvider = ({children}) => { 

    const [productos, setProductos] = useState([])

    const existe = (producto) => {
        productos.some((search) => search.title === producto.title);
    };

    const agregarProducto = (producto) => {
        if(existe(producto)) {
            return Swal.fire("producto ya existe en carro")
        } 

        const productoNuevo = {...producto}
        setProductos([...producto,productoNuevo])
    };

    




    return <CartContext.Provider value={{existe,agregarProducto}}> {children} </CartContext.Provider>
 }

