import * as yup from 'yup'

import withFormProvider from 'HOCs/withFormProvider'

import { useGetRedirectsQuery } from 'app/services/redirect'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import Textarea from 'components/common/form/Textarea'
import Dropdown from 'components/common/form/Dropdown'

const AddPostForm = () => {
  const { data: redirects, isLoading: loadingRedirects } =
    useGetRedirectsQuery()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Form id='post' onSubmit={onSubmit}>
      <Input
        name='title'
        label='Title*'
        type='text'
        placeholder='Enter post title'
      />
      <Input
        name='from'
        label='From*'
        type='text'
        placeholder='Enter from url'
      />
      <Textarea
        name='description'
        label='Description'
        placeholder='Enter post description'
      />
      <Input
        name='download'
        label='Download*'
        type='text'
        placeholder='Enter download url'
      />
      <Dropdown
        label='Redirect'
        name='redirect_id'
        placeholder='Select redirect'
        options={redirects}
        isLoading={loadingRedirects}
      />
      <Dropdown
        label='Redirect'
        name='redirect_id'
        placeholder='Select a category'
        options={redirects}
        isLoading={loadingRedirects}
      />
    </Form>
  )
}

const schema = yup.object({})

export default withFormProvider(AddPostForm, schema)
