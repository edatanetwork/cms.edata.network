export const createFormData = data => {
  const formData = new FormData()

  for (const key in data) {
    if (key === 'links') {
      data.links.forEach((link, index) => {
        for (const key in link) {
          formData.append(`links[${index}][${key}]`, link[key])
        }
      })
    } else {
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
  }

  return formData
}
