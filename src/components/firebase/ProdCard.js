import { Link } from "react-router-dom"



export const ProdCard  = ({title,price,img,category,slug}) => {


  return (
    <div>

        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <Link to={'/item/' + slug }>  <img src={img} alt="Shoes" className="rounded-xl" /> </Link>  
        </figure>
            <div className="card-body items-center text-center">
             <h2 className="card-title">{title}</h2>
            <li>{category}</li>
            <li>{price}$</li>
                <div className="card-actions">
                <Link to={'/item/' + slug }> <button className="btn btn-outline btn-success"> COMPRAR </button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}