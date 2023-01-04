
import React, { useState, useEffect } from 'react'
import Carrossel from '../../components/Carrossel'
import Layout from '../../components/Layout/Layout';

const ProductFeed = () => {

  useEffect(() => {
    console.log("====================")
  }, [])

  return (
    <React.Fragment>
        <Carrossel />
        <div className="page-content">
          
        </div>
    </React.Fragment>
  )
}

export default ProductFeed
