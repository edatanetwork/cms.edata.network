export const generateImageUrl = ({ src, width, height, quality, format }) => {
  const url = `${import.meta.env.VITE_IMG_URL}/${
    width && height ? `fit-in/${width}x${height}/` : ''
  }${format ? `filters:format(${format})/` : ''}${
    quality ? `filters:quality(${quality})/` : ''
  }${src}`

  return url
}
