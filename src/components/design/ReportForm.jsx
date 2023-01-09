import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Field from 'components/common/Field'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const ReportForm = () => {
  const [fields, setFields] = useState({
    reason: '',
    details: ''
  })

  const current = useSelector(state => state.current.current)

  useEffect(() => {
    if (current) {
      setFields(current)
    }
  }, [current])

  return (
    <Form>
      <Field label='Name'>
        <Input value={fields.details.split(',')[0]} readOnly />
      </Field>
      <Field label='Email'>
        <Input value={fields.details.split(',')[1]} readOnly />
      </Field>
      <Field label='Reason'>
        <Input value={fields.reason} readOnly />
      </Field>
    </Form>
  )
}

export default ReportForm
