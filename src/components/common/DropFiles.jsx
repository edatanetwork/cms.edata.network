import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

import Icon, { IconTypes } from 'components/common/Icon'
import { RoundButton } from 'components/styled/common/Button.styled'

function UploadFile({ label, setFiles, files, maxFiles }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: 1
  })

  const handleDelete = idx =>
    setFiles([...files.filter((_img, i) => i !== idx)])

  useEffect(() => {
    setFiles(prev => [...prev, ...acceptedFiles])
    // eslint-disable-next-line
  }, [acceptedFiles])

  return (
    <>
      <Button>
        <span>{label}</span>
        {maxFiles !== files.length && (
          <File {...getRootProps()}>
            <input {...getInputProps()} />
            Upload a file
          </File>
        )}
      </Button>
      {files.length > 0 && (
        <Preview>
          {files.map((file, i) => (
            <Image key={i}>
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

export default UploadFile

const Button = styled.div`
  span {
    color: ${({ theme }) => theme.clrGray};
  }
`

const File = styled.div`
  display: grid;
  place-items: center;
  border: ${({ theme }) => theme.borderGray};
  background-color: transparent;
  width: 100%;
  height: 44px;
  font-weight: 500;
  font-size: 13px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.clrGray};
  }
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
