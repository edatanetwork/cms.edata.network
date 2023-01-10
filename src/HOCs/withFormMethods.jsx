import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = props => {
  const Component = props.component

  const methods = useForm({
    resolver: yupResolver(props.schema)
  })

  return <Component methods={methods} {...props} />
}

const withFormMethods = (component, schema) => {
  return function (props) {
    return <Form component={component} schema={schema} {...props} />
  }
}

export default withFormMethods
