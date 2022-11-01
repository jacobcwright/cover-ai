/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Button } from "@aws-amplify/ui-react"
// import '@aws-amplify/ui-react/styles.css';

type ModalProps = {
  visible: boolean
  title: string
  subtitle: string
  children: React.ReactNode
}

function Modal({ visible, title, subtitle, children }: ModalProps) {
  return visible ? (
    <div className="absolute w-screen h-[120vh] backdrop-blur overflow-clip">
      <div className="absolute md:top-1/4 md:left-1/4 lg:top-1/4 lg:left-1/3 flex flex-col text-center font-[Inter] w-full h-full md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3  bg-[#9EB7BE] text-white justify-evenly rounded-xl content-center items-center">
        <div className="flex flex-col md:px-14 space-y-4">
          <h1 className="text-3xl font-[Averia-Serif-Libre]">{title}</h1>
          <p className="text-lg">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  ) : (
    <> </>
  )
}

export default Modal
