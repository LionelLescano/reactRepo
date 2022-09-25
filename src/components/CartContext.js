import  { useContext , createContext, useState} from 'react'
import Swal from 'sweetalert2'

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)

export const CartContextProvider = ({children})=> {
    
    const [cart, setCart] = useState([]);
    
    
    
    const DeleteCart = () => {
        setCart([])
        Swal.fire("Carrito eliminado")
    }

    const existeProd = (id) => {
        cart.some (search => search.id === id);
    }

    const removeProduct = (producto) => { 
        
        const removeProduct = cart.filter(search => search.id !== producto.id)
        return setCart(removeProduct)
       
    }

    const addProduct = (producto) =>{
        if(existeProd(producto.id)){
            return Swal.fire ("ya existe en la lista.")
        }
        const NewProduct = {...producto}

        setCart([...cart, NewProduct])
        Swal.fire ("Producto Agregado")
        console.log(producto)
    }
   
    return <CartContext.Provider value={{cart, existeProd, addProduct, removeProduct, DeleteCart}}> {children} </CartContext.Provider>
}