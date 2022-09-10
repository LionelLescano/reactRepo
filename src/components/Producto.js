import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const Producto = ( { title, price, img, description, stock, slug} ) => {
    return (
      
      <div className="flex flex-col card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
       <Link to={'/item/' + slug }> <img src={img} alt="game" className="rounded-xl" /> </Link>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions flex items-center my-4">
          <ItemCount stock = {stock} price = {price}></ItemCount>
        </div>
      </div>
    </div>
    )
  }
  export default Producto