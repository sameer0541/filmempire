// "use client";
// import {  getProviders, signIn } from 'next-auth/react';
// import Image from 'next/image';
// import { Suspense, useEffect, useState } from 'react'

// const Loader = ()=>{
//   return (
//     <div className='w-20 h-20 border-2 rounded-full bg-gradient-radial from-indigo-800 to-indigo-400/10 bg-clip-border border-transparent transition-all animate-spin'/>
//   )
// }

// const SignInForm = () => {
  
//     const [provider,setProvider]=useState<any>([])
//     useEffect(()=>{
//        const fetchProviders= async()=>{
//         const response = await getProviders();
//         setProvider(response)
//        }
//        try {
//         fetchProviders();
//        } catch (error) {
//         throw new Error("failed to fetch providers");
//         console.log("providers fetch failed");
//        }

//     },[])
    

//   return (

// <section className=" w-full min-h-screen relative flex items-center justify-center">
//   {/* <div className=' min-w-screen min-h-screen object-contain flex bg-poster '> */}
//     <Image src="/assets/background.png" alt='bg' width={1200} height={700} className=' hidden sm:flex md:flex lg:flex xl:flex 2xl:flex object-fit w-screen h-screen bg-poster absolute' />
//   {/* </div> */}
//     <div className="flex px-4 pb-[10vh] pt-[5vh] w-96 flex-col items-center justify-start relative bg-[#1c1c1ce2] h-[70%]">
//       <Suspense fallback={<Loader/>}> {/*className='flex items-center justify-center relative transition-all'*/}
//         <h2 className='text-2xl text-slate-100 font-bold absolute translate-y-[-50%]'>Sign In</h2>
//         <section className="w-full h-full relative flex items-center justify-start flex-col translate-y-[30%]">
//       {Object.values(provider).map((element : any)=>{
//         return(
//             <button key={element.id} className='flex  w-[325px] items-center justify-center font-medium text-slate-100 bg-[#2d2d2d] gap-3 px-4 py-3 rounded-lg my-4' onClick={()=>{
//               try {
//                 signIn(element.id,{
//                   redirect: false,
//                   redirectTo: "/auth/new-user",
//                 });
//               } catch (error) {
//                 console.log(error)
//               }
//             }}>
//               <p className="text-fuchsia-50  font-normal text-lg">{`Sign in with ${element.name}`}</p>
//                 <Image src={`/assets/${element.name}.png`.toString()} alt='logo' width={40} height={40}/>
//             </button>
//         )
//     })}
//     </section>
//     </Suspense>
    
//     </div>
//   </section>
//   )
// }

// export default SignInForm
