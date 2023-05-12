import React from 'react'
import peproni from './assets/peproni.png'
import Pizza from './Pizza'

const PizzaProducts = () => {

    const[products,setProducts]=React.useState([]);

    React.useEffect(() => {
        
    },[products])

  return (
    <div className='container mx-auto pb-24'>
        <h1 className='text-lg font-bold my-8'>
            Products
        </h1>
        <div className='grid grid-cols-5 my-8 gap-24'>
           <Pizza/>
           <Pizza/>
           <Pizza/>
           <Pizza/>
        </div>
    </div>
  )
}

export default PizzaProducts