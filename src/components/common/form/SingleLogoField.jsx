import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext, Controller } from 'react-hook-form'

import Image from 'components/common/Image'
import Icon, { IconTypes } from 'components/common/Icon'
import { CircleButton } from 'components/styled/common/Button.styled'
import * as S from 'components/styled/common/SingleIconField.styled'

const SingleLogoField = ({ name, label }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Field value={value} onChange={onChange} label={label} />
      )}
    />
  )
}

const Field = ({ value, onChange, label }) => {
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
    <div>
      <S.Label>{label}</S.Label>
      {value ? (
        <S.Preview>
          <Image src={value} />
          <CircleButton
            type='button'
            onClick={() => onChange(null)}
            style={{ position: 'absolute', top: '1rem', right: '1rem' }}
          >
            <Icon type={IconTypes.cross} />
          </CircleButton>
        </S.Preview>
      ) : (
        <S.Field {...getRootProps()}>
          <input {...getInputProps()} />
          <S.Placeholder>
            <Icon type={IconTypes.camera} />
            Drag and drop photo
          </S.Placeholder>
        </S.Field>
      )}
    </div>
  )
}

export default SingleLogoField
