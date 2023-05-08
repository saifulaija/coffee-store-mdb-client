
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
 

  return (
    <>
      <h1 className='text-3xl bg-gradient-to-tr from-green-400 to-fuchsia-600'>Coffee Making Store</h1>
      <h3 className='text-center text-3xl font-serif font-bold underline-offset-8 '>Hot & Cold Coffee : {coffees.length}</h3>
      <div className='m-20 grid md:grid-cols-2 gap-4'>
        {
          coffees?.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
