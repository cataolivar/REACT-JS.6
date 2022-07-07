import React, { useEffect, useState } from "react";
import { getProds } from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail";
import PacmanLoader from "react-spinners/PacmanLoader"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";

function ItemDetailContainer () {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (()=> {
        setLoading (true)
        getProds(categoryId)
        .then(resp => setProductList(resp.find(prod => prod.category)))
        .finally(()=> setLoading(false))

    }, [categoryId])

    return(
        <div className="spinners"> {loading ? <PacmanLoader color="#FFC0CB" size= {25} margin={0}/>
            : <ItemDetail productList={productList}/>} </div>
    )

}

export default ItemDetailContainer