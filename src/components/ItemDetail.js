import React from 'react'
import ItemCount from "./ItemCount"



const ItemDetail = ({item:{price,title,description,img,stock}}) => {


  return (
    <div className="flex flex-row card w-100 bg-base-100 shadow-xl text-center">
      <figure className="px-10 pt-10">
        <img src={img} alt="game" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions flex items-center my-4">
        <ItemCount stock = {stock} price = {price}></ItemCount>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail