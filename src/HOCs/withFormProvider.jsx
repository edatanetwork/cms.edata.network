import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = props => {
  const Component = props.component

  const methods = useForm({
    resolver: yupResolver(props.schema)
  })

  return (
    <FormProvider {...methods}>
      <Component methods={methods} {...props} />
    </FormProvider>
  )
}

const withFormProvider = (component, schema) => {
  return function (props) {
    return <Form component={component} schema={schema} {...props} />
  }
}

export default withFormProvider
