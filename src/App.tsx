
import './App.css'
import { Button, Form, Input } from './components'
import { useRef } from 'react'

type FromData = {
  name: string,
  email: string
}
import { HandleType } from './components/action/Form/Form'

function App() {
  const ref = useRef<HandleType>(null)

  const handleFormSave = (data: unknown) => {
    const extractData = data as FromData;
    ref.current?.clear()

    console.log(extractData)
  }

  return (
    <>
      <Form onSave={handleFormSave} ref={ref}>
        <Input placeholder='Enter Name' name='name' type='text' />
        <Input placeholder='Enter email' name='email' type='email' />

        <Button variant="secondary">Submit</Button>

      </Form>
    </>
  )
}

export default App
