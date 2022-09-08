import ItemCount from "./ItemCount"

const Producto = ( { title, price, img,description,stock} ) => {
    return (
      
      <div className="flex flex-col card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="game" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions flex items-center my-4">
          {/* <button className="btn no-animation text-lg">{price} $</button> */}
          <ItemCount stock = {stock} price = {price}></ItemCount>
        </div>
      </div>
    </div>
    )
  }
  export default Producto