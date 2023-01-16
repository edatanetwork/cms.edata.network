import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import { generateImageUrl } from 'utils/generateImageUrl'

import placeholder from 'assets/placeholder.png'

const Image = ({ src, alt, width, height, quality, format }) => {
  return (
    <LazyLoadImage
      effect='opacity'
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
