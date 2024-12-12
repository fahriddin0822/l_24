import { request } from '@/api'
import Products from '@/components/Products'
import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'

const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(()=>{
    request
      .get("/product/get")
      .then(res => setProducts(res.data))
  }, [])
  return (
    <div>
      <Categories/>
      <p>Home</p>
      <Products data={products}/>
    </div>
  )
}

export default Home