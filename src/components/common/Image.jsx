import { generateImageUrl } from 'utils/generateImageUrl'

import placeholder from 'assets/placeholder.png'

const Image = ({ src, alt, width, height, quality, format }) => {
  return (
    <img
      src={
        src
          ? src.preview
            ? src.preview
            : generateImageUrl({ src, width, height, quality, format })
          : placeholder
      }
      alt={alt}
    />
  )
}

export default Image
