
import './App.css'
import { Button, Form, Input } from './components'

type FromData = {
  name: string,
  email: string
}

function App() {

  const handleFormSave = (data: unknown) => {
    const extractData = data as FromData;

    console.log(extractData)
  }

  return (
    <>
      <Form onSave={handleFormSave}>
        <Input placeholder='Enter Name' name='name' type='text' />
        <Input placeholder='Enter email' name='email' type='email' />

        <Button variant="secondary">Submit</Button>

      </Form>
    </>
  )
}

export default App
