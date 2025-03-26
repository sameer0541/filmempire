/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


const TrendCard = ({data,translateValue,elementIndex,poster_path,setTransValue}:{cardNumber?:number,data:any,translateValue:number,elementIndex:number,poster_path:string,setTransValue:(num:number)=>void}) => {
  return (
    <div className={`w-[max(20vw,195px)] h-[max(18vw,145px)] flex flex-row items-center justify-center -gap-2 select-none 
    -translate-x-[calc(${translateValue}*25vw)] transition-all duration-300 ease-in-out`} onClick={()=>setTransValue(elementIndex)}>
      <h2 className='text-[max(8vw,85px)] text-slate-600 text-border'>{elementIndex+1 || 2}</h2>
      <div className={`w-[max(18vw,195px)] h-[max(12vw,125px)] rounded-md bg-transparent text-white z-10 cursor-pointer ${elementIndex===translateValue ? 'border border-neutral-100  p-1 scale-[1.05]':''}`} >
        
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="backdrop" className="h-full w-full object-fill" />
      </div>
    </div>
  ) 
}
export const Cards = (_props: { item: any; focused?: boolean; })=>{
  return(
  <div className={`w-[max(25vw,195px)] h-[max(17vw,145px)] flex flex-row items-center justify-center -gap-2 select-none hover:scale-[1.05] hover:z-10 hover:backdrop-blur-sm transition-transform duration-100 hover:shadow-lg`}>
    <div className="w-[max(25vw,195px)] h-[max(15vw,125px)] bg-slate-600 text-white cursor-pointer">
        TM
    </div>
  </div>
)};


export default TrendCard


export const HeroCard = ({poster_path,translateValue,elementIndex,title}:HeroCardProps) => {
  console.log(poster_path);
  return (
    <div className={`w-[max(20vw,195px)] h-[max(18vw,145px)] flex flex-row items-center justify-center -gap-2 select-none -translate-x-[calc(${translateValue}*15vw)] transition-all duration-300 ease-in-out ${elementIndex===translateValue ? 'border border-neutral-100 border-spacing-1 scale-[1.05]':''}`} >
      <h2 className='text-[max(8vw,85px)] text-slate-600'>{elementIndex+1}</h2>
      <div className="w-[max(18vw,195px)] h-[max(12vw,125px)] rounded-md text-white z-10 cursor-pointer">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="backdrop" className="h-full w-full object-cover" />
        <p className="text-transparent hover:text-neutral-50 max-w-fit overflow-hidden text-ellipses max-h-4 text-[15px] text-end">{title}</p>
      </div>
    </div>
  ) 
}