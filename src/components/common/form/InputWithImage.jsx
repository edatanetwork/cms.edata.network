import styled from 'styled-components'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext, Controller } from 'react-hook-form'
import { generateImageUrl } from 'utils/generateImageUrl'

import Image from 'components/common/Image'
import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import * as F from 'components/styled/common/Field.styled'

const InputWithImage = ({ label, inputName, dropzoneName, placeholder }) => {
  const {
    control,
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <F.Field error={errors[inputName]}>
      <F.Header>
        <F.Label>{label}</F.Label>
        {errors[inputName] && <F.Error>{errors[inputName].message}</F.Error>}
      </F.Header>
      <F.Body>
        <Grid grow={1}>
          <F.Input
            type='text'
            name={inputName}
            placeholder={placeholder}
            {...register(inputName)}
          />
          <Controller
            name={dropzoneName}
            control={control}
            render={({ field: { value, onChange } }) => (
              <Dropzone value={value} onChange={onChange} />
            )}
          />
        </Grid>
      </F.Body>
    </F.Field>
  )
}

export default InputWithImage

const Dropzone = ({ value, onChange }) => {
  const onDrop = useCallback(acceptedFile => {
    const newFile = Object.assign(acceptedFile[0], {
      preview: URL.createObjectURL(acceptedFile[0])
    })

    onChange(newFile)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    maxFiles: 1
  })

  return (
    <Zone {...getRootProps()}>
      {value ? (
        <Image
          src={value.preview ? value : generateImageUrl({ src: value })}
          alt=''
        />
      ) : (
        <>
          <input {...getInputProps()} />
          <Icon type={IconTypes.bigPlus} />
        </>
      )}
    </Zone>
  )
}

const Zone = styled.div`
  min-height: 130px;
  display: grid;
  place-content: center;
  padding-block: 1.5rem;
  border-top: ${({ theme }) => theme.borderGray};
  cursor: pointer;

  img {
    width: 80px;
    height: auto;
  }

  svg {
    width: 48px;
  }
`
