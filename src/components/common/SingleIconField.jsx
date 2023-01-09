import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { generateImageUrl } from 'utils/generateImageUrl'

import Icon, { IconTypes } from 'components/common/Icon'
import * as Styled from 'components/styled/common/IconField.styled'

const SingleIconField = ({ value, onChange }) => {
  const onDrop = useCallback(acceptedFiles => {
    const newFile = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )[0]
    onChange(newFile)
    // eslint-disable-next-line
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    maxFiles: 1
  })

  return (
    <div>
      <Styled.Label>Icons</Styled.Label>
      {value ? (
        <Styled.Preview>
          <Styled.Item>
            <button type='button' onClick={() => onChange(null)}>
              <Icon type={IconTypes.cross} />
            </button>
            Style 1
            <div>
              <img
                src={
                  value.preview?.includes('blob')
                    ? value.preview
                    : generateImageUrl({
                        src: value.preview ? value.preview : value
                      })
                }
                alt='icon'
              />
            </div>
          </Styled.Item>
        </Styled.Preview>
      ) : (
        <Styled.AddNewButton {...getRootProps()} type='button'>
          <input {...getInputProps()} />
          ADD NEW
        </Styled.AddNewButton>
      )}
    </div>
  )
}

export default SingleIconField
