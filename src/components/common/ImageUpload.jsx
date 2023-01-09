import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled, { css } from 'styled-components'

import { RoundButton } from 'components/styled/common/Button.styled'
import Icon, { IconTypes } from 'components/common/Icon'

import { generateImageUrl } from 'utils/generateImageUrl'

const ImageUpload = ({ images, setImages, error }) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'image/*': []
    }
  })

  const handleDelete = idx => {
    setImages([...images.filter((_img, i) => i !== idx)])
  }

  useEffect(() => {
    const newFiles = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )

    setImages(prev => [...prev, ...newFiles])
    // eslint-disable-next-line
  }, [acceptedFiles])

  return (
    <>
      <Container error={error}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            <Icon type={IconTypes.camera} />
            {error ? 'Please upload a photo' : 'Drag and drop photo'}
          </p>
        </div>
      </Container>
      {images.length > 0 && (
        <Preview>
          {images.map((file, i) => (
            <Image key={i}>
              <img
                src={
                  file.preview.includes('post')
                    ? generateImageUrl({ src: file.preview })
                    : file.preview
                }
                alt=''
              />
              <p>{file.name}</p>
              <RoundButton type='button' onClick={() => handleDelete(i)}>
                <Icon type={IconTypes.cross} />
              </RoundButton>
            </Image>
          ))}
        </Preview>
      )}
    </>
  )
}

export default ImageUpload

const Container = styled.section`
  display: grid;
  place-content: center;
  border: 2px dashed ${({ theme }) => theme.clrGray};
  padding: 1.25rem 0;
  cursor: pointer;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.clrGray};
    font-size: 13px;

    svg {
      width: 24px;
    }
  }

  ${props =>
    props.error &&
    css`
      border: 2px dashed red;

      p {
        color: red;

        svg {
          path {
            fill: red;
          }
        }
      }
    `}
`

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    flex: 1;
    margin-left: 0.5rem;
  }

  img {
    width: 50px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
  }

  svg {
    width: 10px;
  }
`

const Preview = styled.div`
  display: grid;
  gap: 0.5rem;
  border: 2px dashed ${({ theme }) => theme.clrLightGray};
  border-radius: 5px;
  padding: 0.5rem;
`
