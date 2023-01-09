import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { generateImageUrl } from 'utils/generateImageUrl'

import Icon, { IconTypes } from 'components/common/Icon'
import * as Styled from 'components/styled/common/IconField.styled'

const IconField = ({ files, setFiles }) => {
  const onDrop = useCallback(acceptedFiles => {
    const newFiles = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )
    setFiles(prev => [...prev, ...newFiles])
    // eslint-disable-next-line
  }, [])

  const handleDelete = idx => {
    setFiles([...files.filter((_img, i) => i !== idx)])
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
      {files.length > 0 && (
        <Styled.Preview>
          {files.map((file, i) => (
            <Styled.Item key={i}>
              <button type='button' onClick={() => handleDelete(i)}>
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
