import React from 'react'

type InputProps = React.ComponentPropsWithoutRef<'input'>


const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {

  return <input className='input' {...props} ref={ref} />
})

export default Input