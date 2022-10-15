import { collection, getDocs, getFirestore, query, where  } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { DetailCard } from "./DetailCard"


const Detail = () => {

    const {slug: slugElem} = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
      getProductsBySlug()
    }, [])
    
    const getProductsBySlug = () => { 
       
            const db = getFirestore();
            const itemCollection = collection(db,'products')
            const que = query(itemCollection, where('slug', '==', 'slugElem'))
            getDocs(que).then(snapshot => { 
                setProduct(snapshot.docs.map(p => ({...p})))
            })  
        }

  return (
    <div>
        <div className=''> product: {slugElem}</div>
        <Link to={'/'}> <button className='btn btn-warning m-5'>  VOLVER ATRAS </button> </Link>
        
        {
            product.map(p => <DetailCard  key = {p.id} {...p}></DetailCard>)
        }
    
    </div>
  )
}

export default Detail