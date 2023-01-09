import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { generateImageUrl } from 'utils/generateImageUrl'

import Icon, { IconTypes } from 'components/common/Icon'
import * as Styled from 'components/styled/common/IconField.styled'

const IconField = ({ value, onChange, watch }) => {
  const onDrop = useCallback(acceptedFiles => {
    const existingFiles = watch('icons')
    const newFiles = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )

    if (existingFiles) {
      onChange([...existingFiles, ...newFiles])
    } else {
      onChange(newFiles)
    }

    // eslint-disable-next-line
  }, [])

  const handleDelete = file => {
    const remainingFiles = value.filter(el => el.preview !== file.preview)
    onChange(remainingFiles)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    }
  })

  return (
    <div>
      <Styled.Label>Icons</Styled.Label>
      {value && (
        <Styled.Preview>
          {value.map((file, i) => (
            <Styled.Item key={i}>
              <button type='button' onClick={() => handleDelete(file)}>
                <Icon type={IconTypes.cross} />
              </button>
              Style {i + 1}
              <div>
                <img
                  src={
                    file.preview.includes('blob')
                      ? file.preview
                      : generateImageUrl({ src: file.preview })
                  }
                  alt='icon'
                />
              </div>
            </Styled.Item>
          ))}
        </Styled.Preview>
      )}
      <Styled.AddNewButton {...getRootProps()} type='button'>
        <input {...getInputProps()} />
        ADD NEW
      </Styled.AddNewButton>
    </div>
  )
}

export default IconField
