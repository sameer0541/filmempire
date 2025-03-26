import { ReactNode } from "react"

const Details = ({title,children}:{title:string,children:ReactNode}) => {
  return (
    <details className="w-[50vw] max-md:w-9/10 bg-neutral-800 p-2 rounded-sm select-none transition-all duration-1000">
        <summary className="text-neutral-300 font-semibold">{title}</summary>
        <div className="w-full h-0.5 bg-neutral-600 mt-1"/>
        {children}
    </details>
  )
}

export default Details
