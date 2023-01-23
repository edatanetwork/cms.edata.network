export const checkFieldError = (errors, name) => {
  const splitName = name.split('.')[0]
  const splitIndex = name.split('.')[1]
  const splitField = name.split('.')[2]

  if (
    name.includes('.') &&
    errors[splitName] &&
    errors[splitName][splitIndex] !== undefined
  ) {
    return errors[splitName][splitIndex][splitField]
  } else {
    return errors[name]
  }
}
