import { cn } from "@/utils/cn"
import { MouseEventHandler } from "react"

function Button({ title, onClick, classsName="" }: { title: string, onClick?: MouseEventHandler<HTMLButtonElement>, classsName?:string }) {
  return (
    <>
      <button className={cn(`w-full capitalize font-semibold bg-primary-soft border border-primary-soft hover:bg-primary-hard hover:border text-white px-8 py-2 rounded-lg  text-lg ${classsName}`)} onClick={onClick}>{title}</button>
    </>
  )
}

export default Button