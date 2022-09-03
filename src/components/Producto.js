
const Producto = ( {id, title, price, image} ) => {
    return (
      
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="game" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Description</p>
        <div className="card-actions">
          <button className="btn btn-primary">{price} $</button>
        </div>
      </div>
    </div>
    )
  }
  export default Producto