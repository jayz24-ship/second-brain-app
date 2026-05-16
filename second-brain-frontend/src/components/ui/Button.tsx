import type { ReactElement } from "react";


interface ButtonPorps{
  variant :"primary" | "secondary",
  text : string,
  startIcon: ReactElement
}

const variantStyles = {
  primary : "bg-orange-500 text-white",
  secondary : "bg-orange-200"
}

const defaultStyles = "rounded-md shaow-md px-4 py-3 flex items-center m-2"

export function Button({variant,text,startIcon}:ButtonPorps){
    return (
      <button className={`${variantStyles[variant]} ${defaultStyles} `}>
       <div className="pr-4">
        {startIcon}
       </div>
        {text}
      </button>
    )
}