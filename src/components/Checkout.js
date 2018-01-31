import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Street Address' />
    </Form.Field>
    <Form.Field>
      <input placeholder='City' />
    </Form.Field>
    <Form.Field>
      <input placeholder='State' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Zip' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Credit Card Number' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Expiration' />
    </Form.Field>


    <Button type='submit'>Submit</Button>
  </Form>
)
      

export default FormExampleForm;
