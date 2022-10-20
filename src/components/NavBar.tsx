import React , {useState} from 'react'
//import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";


import { Link } from 'gatsby';






const NavBar = () => {

    
    const [nav, setNav] = useState(false);
    const [search , setSearch] = useState(false)
    const handleClick = () => setNav(!nav)
    const searchClick = () => setSearch(!search)
    const navState:String = "HOME"
    //useSelector((state:any) => state.navigation.navLocation)


    return (
        <div className='w-full h-[70px] z-10 bg-slate-100 sticky top-0 z-50 shadow-sm  drop-shadow-lg'>
            {search ? <div className='px-3 w-full flex justify-between items-center w-full h-full'>
                <div className='flex justify-between '>
                    {/* <SearchIcon className='w-5' /> */}
                    <input type="text" placeholder='Search  resource' className='border border-slate-100 bg-slate-100 py-2 pl-[14px] pr-[40px] focus:outline-none' />
                </div>
               {/* <XIcon className='w-5' onClick={searchClick} /> */}
            </div> : ""} 
            
            {search ? "" : <div className='px-3 w-full flex justify-between items-center w-full h-full'>
            <div className='px-3 w-full flex justify-between items-center w-full h-full'>
                <div className='flex items-center '>
                    {/* <ArrowsExpandIcon className='w-10' /> */}
                    <p className='pl-2 text-3xl font-bold mr-4 sm:text-4xl'>Chokma.</p>
                </div>
                <div className='flex items-center h-full'>
                    <ul className='hidden md:flex space-x-4'>
                         <Link to="/"><li className={'text-black-800 font-bold'} > Home</li></Link>
                        <Link to="/article"><li className={'text-black-800 font-bold' } > Article</li></Link>
                 
                    </ul>
                </div>
                <div className='flex items-center'>
                        {/* <SearchIcon className='w-5 mr-5 grey-200' onClick={searchClick} /> */}
                    
                    <div onClick={handleClick} className='md:hidden'>
                        {/* {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />} */}
                    </div>
                    
                </div>
            </div> 
             
            </div>}
            {search ? "" : <ul className={!nav ? 'hidden' : 'absolute bg-slate-100 bg-opacity-100 shadow-xl w-full px-8'}>
                
                 <Link to="/"><li className={'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' } > Home</li></Link>
                <Link to="/article"><li className={'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' } > Article</li></Link>
           
           </ul>} 
                
              
        </div>
    )
}

export default NavBar;