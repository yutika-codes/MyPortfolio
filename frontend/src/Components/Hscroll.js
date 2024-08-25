import React from 'react'
import "../styles/Hscroll.css"
import {Link, Outlet } from 'react-router-dom'

// import Link from 'gatsby';

// const styles={ className:'mx-auto flex flex-col justify-center max-w-sm',
// activeClassName:'underline text-gray-900'
// }


// const list=[
//     'urgent','animals','hunger','education','food fridge' 
// ]
// {  className:styles.className,
//     activeClassName:styles.activeClassName,
//     to:'/App2',
// name:'animals'
// }
// ]

const Hscroll = () => {
  return (
    <>

    
    {/* <div className='mx-auto flex flex-col justify-center max-w-sm'>

        {/* <h1 className='text-center text-2xl font-bold my-12 text-white'>horizontal scroll</h1> */}
        {/* <div>
<nav>
            <ul className='flex flex-row gap-6 overflow-y-auto'>
                { */}
                    {/* // list.map((item)=>
                    // (
                        <>
           <Link to="/urgent">
 <li className='px-4 py-2 bg-gray-800 rounded-full text-white '>
{list[0]}</li> </Link>                       
    <Link to="/animals">
 <li className='px-4 py-2 bg-gray-800 rounded-full text-white '>
{list[1]}</li> </Link><Link to="/hunger">
<li className='px-4 py-2 bg-gray-800 rounded-full text-white '> {list[2]}</li> </Link>
<Link to="/education" >
 <li className='px-4 py-2 bg-gray-800 rounded-full text-white '>{list[3]}</li> </Link>
 <Link to="/food fridge" >
<li className='px-4 py-2 bg-gray-800 rounded-full text-white '>{list[4]}</li> </Link>


</>
 */}

                       
                       
                    
{/* }
            </ul>
            </nav>
        </div>
      

        <div>
         {/* {list.map(link => (<Link  className={link.className} activeClassName={link.activeClassName} to={link.to}>{link.name}</Link> ))} */}
       
         {/* </div> */}
     {/* </div>  */}


    
     <div className="flex justify-center space-x-2">
  <div className="space-y-2">
   <Link to='urgent'> <button
      type="button"
      className=" bg-orange-600 inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
      Urgent
    </button></Link>
    {/* <button
      type="button"
      className="inline-block rounded-full bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
      Secondary
    </button> */}
    <Link to='animals'><button
      type="button"
      className="bg-red-600 inline-block rounded-full bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
      Animals
    </button></Link>
    <Link to='hunger'><button
      type="button"
      className="bg-lime-600 inline-block rounded-full bg-danger px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
      Hunger
    </button></Link>
   <Link to='education'> <button
      type="button"
      className="bg-green-600 inline-block rounded-full bg-warning px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]">
      Education
    </button></Link>
    <Link to='foodfridge'><button
      type="button"
      className="bg-teal-600 inline-block rounded-full bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
      Food Fridge
    </button></Link>
    
    
  </div>
  <Outlet/>
</div>
    </>
  )
}

export default Hscroll