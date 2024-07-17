import { cn } from "@/utils/cn"
import Link from "next/link"
import { MouseEventHandler } from "react"

function Button({ title, onClick, classsName="" }: { title: string, onClick?: MouseEventHandler<HTMLButtonElement>, classsName?:string }) {
  return (
    <button className="z-50">
      <Link href={"/schedule"}  className={cn(` w-auto inline-block capitalize font-semibold bg-primary-soft border border-primary-soft hover:bg-primary-hard hover:border text-white px-8 py-2 rounded-lg  text-lg ${classsName}`)}>{title}</Link>
    </button>
  )
}

export default Button