/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Link, NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
  const pathname = useLocation();
    return(
    <nav className={`w-full flex items-center justify-between h-[10vh] fixed z-50 bg-gradient-to-b from-black to-black/5 shadow-lg shadow-black/5`}>
      <div className=" h-full flex items-center justify-center object-contain px-[5vw] py-3 relative gap-4">
        <Link to="/"> 
        <svg width="48" height="60" viewBox="0 0 56 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M55.0455 0V100L35.7273 45.4545V0H55.0455Z" fill="url(#paint0_linear_4_8)"/>
<path d="M19.8182 55.6818V97.7273H12.8129C11.4267 97.7273 10.0445 97.879 8.69126 98.1797L0.5 100V0L19.8182 55.6818Z" fill="url(#paint1_linear_4_8)"/>
<path d="M34.5909 97.7273L0.5 0H19.8182L55.0455 100L50.5 98.8636L50.3897 98.8416C46.6844 98.1005 42.915 97.7273 39.1364 97.7273H34.5909Z" fill="#E50913"/>
<defs>
<linearGradient id="paint0_linear_4_8" x1="55.0455" y1="-1.13636" x2="36.8637" y2="95.4545" gradientUnits="userSpaceOnUse">
<stop stop-color="#B50612"/>
<stop offset="0.28" stop-color="#9B050F"/>
<stop offset="0.525799" stop-color="#CC0312"/>
<stop offset="1" stop-color="#94020D"/>
</linearGradient>
<linearGradient id="paint1_linear_4_8" x1="41.4091" y1="-9.09091" x2="5.04545" y2="92.0455" gradientUnits="userSpaceOnUse">
<stop stop-color="#76030E"/>
<stop offset="0.657081" stop-color="#BB0413"/>
<stop offset="0.853664" stop-color="#A6000D"/>
<stop offset="1" stop-color="#B1060F"/>
</linearGradient>
</defs>
        </svg>
        </Link>
        <div className='flex items-center justify-center overflow-y-hidden overflow-x-scroll no-scrollbar relative max-sm:hidden gap-2' >
          <NavLink to={'/'} className='text-white font-normal text-lg px-3 text-nowrap hidden sm:block selection:bg-neutral-100 selection:text-neutral-800'>Home</NavLink>
          <NavLink to={'/tvShows'} className='text-white font-normal text-lg px-3 text-nowrap hidden sm:block selection:bg-neutral-100 selection:text-neutral-800'>TV Shows</NavLink>
          <NavLink to={'/allMovie'} className='text-white font-normal text-lg px-3 text-nowrap hidden sm:block selection:bg-neutral-100 selection:text-neutral-800'>Movies</NavLink>
          {/* <NavLink to={'/'} className='text-white font-normal text-lg px-3 text-nowrap hidden sm:block selection:bg-neutral-100 selection:text-neutral-800' aria-disabled>Contact us</NavLink>
          <NavLink to={'/'} className='text-white font-normal text-lg px-3 text-nowrap hidden sm:block selection:bg-neutral-100 selection:text-neutral-800'>My List</NavLink> */}
        </div>  
      </div>
      
      <div className="flex items-center justify-center pr-4 gap-7">
        <div className={`w-full flex items-center justify-center min-h-full rounded-full ${pathname.pathname!=='/' ? 'bg-neutral-700':'bg-transparent'}`}>
        <input type="text" className={`border-none active:border-none w-[15vw] max-md:w-[50vw] text-neutral-200/90 rounded-full bg-transparent h-full py-2  pl-6 text-xl font-semibold`} />
        <button className={`${pathname.pathname==='/'?'hidden':'block'}`} onClick={()=>{}}>
          <img src="/assets/search.png" alt="search" width={45} height={45} className={`cursor-pointer ${pathname.pathname === "/" ? 'hidden':'block'}`}/>
        </button>
        </div>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </nav>)
}

export default Navbar
