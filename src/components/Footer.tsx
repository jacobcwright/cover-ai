import React from "react"

type Props = {}

function Footer({}: Props) {
  return (
    <div className="flex w-full h-24 bg-[#9EB7BE] font-[Averia-Serif-Libre] justify-end content-center items-center px-8">
      <h1 className="flex text-2xl text-white tracking-wider">
        © 2022 Br<p className="text-[#0BA8D3]">ai</p>niac
      </h1>
    </div>
  )
}

export default Footer
