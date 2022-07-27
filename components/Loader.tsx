import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
        <TailSpin color="red" />
    </div>
  )
}

export default Loader