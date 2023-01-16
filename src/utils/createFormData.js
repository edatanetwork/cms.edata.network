export const createFormData = data => {
  const formData = new FormData()

  for (const key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((el, i) => {
        if (el.id) {
          formData.append(`${key}[${i}]`, el.id)
        } else {
          formData.append(`${key}[${i}]`, el)
        }
      })
    } else {
      if (data[key] !== undefined && data[key] !== null) {
        formData.append(key, data[key])
      }
    }
  }

  return formData
}
