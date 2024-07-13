import { MouseEventHandler } from "react"

function Button({ title, onClick, classsName="" }: { title: string, onClick?: MouseEventHandler<HTMLButtonElement>, classsName?:string }) {
  return (
    <>
      <button className={`bg-primary-soft text-white px-8 py-2 rounded m-2 text-lg ${classsName}`} onClick={onClick}>{title}</button>
    </>
  )
}

export default Button