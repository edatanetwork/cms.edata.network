import * as yup from 'yup'

import withFormProvider from 'HOCs/withFormProvider'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'

const PostForm = () => {
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Form id='post' onSubmit={onSubmit}>
      <Input name='title' />
    </Form>
  )
}

const schema = yup.object({})

export default withFormProvider(PostForm, schema)
