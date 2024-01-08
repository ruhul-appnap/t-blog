import React, { forwardRef, useImperativeHandle, useRef } from 'react'

type FormProps = {
  onSave: (data: unknown) => void
} & React.ComponentPropsWithoutRef<'form'>

export type HandleType = {
  clear: () => void;
}

const Form = forwardRef<HandleType, FormProps>(({ onSave, children, ...props }, ref) => {
  const formRef = useRef<HTMLFormElement>(null)

  useImperativeHandle(ref, () => {
    return {
      clear: () => formRef.current?.reset()
    }
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData)
    onSave(data)
  }

  return (
    <form onSubmit={handleSubmit} {...props} className='form' ref={formRef}>
      {children}
    </form>
  )
})

export default Form
