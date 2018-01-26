import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>Message</label>
      <input placeholder='Message' />
    </Form.Field>
    <Form.Field>
      <label>Phone number</label>
      <input placeholder='Phone number' />
    </Form.Field>
    <Form.Field>
      
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormExampleForm