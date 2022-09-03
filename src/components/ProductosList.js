
// import { Link } from "react-router-dom"
import Producto from "./Producto"

const ProductosList = ( {productos} ) => {
  return (
    <div className="p-10">
      {productos.length ? (productos.map((prod) => <Producto key={prod.id} {...prod}/>)) : (<h2> loading...</h2>) }
    </div>
  )
}
export default ProductosList