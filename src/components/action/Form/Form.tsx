import React from 'react'

type FormProps = {
  onSave: (data: unknown) => void
} & React.ComponentPropsWithoutRef<'form'>

function Form({ onSave, children, ...props }: FormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData)
    onSave(data)
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} {...props} className='form'>
      {children}
    </form>
  )
}

export default Form
