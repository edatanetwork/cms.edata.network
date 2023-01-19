import * as yup from 'yup'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'

import { useGetSportsQuery } from 'app/services/sport/sport'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import MultiSelect from 'components/common/form/MultiSelect'

const DomainForm = ({ methods: { reset } }) => {
  const { data: dataSports, isLoading: isLoadingSports } = useGetSportsQuery()

  const onSubmit = data => {
    const body = createFormData(data)
    console.log(Object.fromEntries(body))
    reset()
  }

  return (
    <Form id='domain' onSubmit={onSubmit}>
      <Input
        label='Domain Name'
        name='domain_name'
        placeholder='Enter domain name'
      />
      <Input
        label='Domain URL'
        name='domain_url'
        placeholder='Enter domain url'
      />
      <MultiSelect
        title='Sports'
        name='sports'
        options={dataSports?.sports}
        isLoading={isLoadingSports}
        placeholder='Select sports'
      />
    </Form>
  )
}

const schema = yup.object({
  domain_name: yup.string().required('Domain name is required!'),
  domain_url: yup.string().required('Domain url is required!')
})

export default withFormProvider(DomainForm, schema)
