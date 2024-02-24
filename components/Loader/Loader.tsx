import React from 'react'
import"./Loader.css"
import { LoaderProps } from '@/models/props.model'

const Loader = ({ titleLoader }: LoaderProps) => {
  return (
    <div className="loaderContain">
        <span className="loader">{titleLoader}</span>
    </div>
  )
}

export default Loader