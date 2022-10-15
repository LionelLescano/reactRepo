import ItemCount from "../ItemCount"



export const DetailCard  = ({title,price,img,category}) => {


  return (
    <div>

        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="pictures" className="rounded-xl" />  
        </figure>
            <div className="card-body items-center text-center">
             <h2 className="card-title">{title}</h2>
            <li>{category}</li>
            <li>{price}$</li>
                <div className="card-actions">
                 <ItemCount/>
                </div>
            </div>
        </div>
    </div>
  )
}