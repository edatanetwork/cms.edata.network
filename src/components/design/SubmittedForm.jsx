import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Field from 'components/common/Field'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'
import { Textarea } from 'components/styled/common/Field.styled'

const SubmittedForm = () => {
  const [fields, setFields] = useState({
    title: '',
    author_name: '',
    author_email: '',
    download_link: '',
    description: ''
  })

  const current = useSelector(state => state.current.current)

  useEffect(() => {
    if (current) {
      setFields(current)
    }
  }, [current])

  return (
    <Form>
      <Field label='Title'>
        <Input value={fields.title} readOnly />
      </Field>
      <Field label='Name'>
        <Input value={fields.author_name} readOnly />
      </Field>
      <Field label='Email'>
        <Input value={fields.author_email} readOnly />
      </Field>
      <Field label='Download'>
        <Input value={fields.download_link} readOnly />
      </Field>
      <Field label='Description'>
        <Textarea rows={5} value={fields.description} readOnly />
      </Field>
    </Form>
  )
}

export default SubmittedForm
