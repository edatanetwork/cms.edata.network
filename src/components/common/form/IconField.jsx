import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext, Controller } from 'react-hook-form'

import { generateImageUrl } from 'utils/generateImageUrl'

import Icon, { IconTypes } from 'components/common/Icon'
import * as Styled from 'components/styled/common/IconField.styled'

const IconField = ({ name, label }) => {
  const { watch, control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Field
          value={value}
          onChange={onChange}
          watch={watch}
          label={label}
          name={name}
        />
      )}
    />
  )
}

export default IconField

const Field = ({ value, onChange, watch, label, name }) => {
  const onDrop = useCallback(acceptedFiles => {
    const existingFiles = watch(name)

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
      <Styled.Label>{label}</Styled.Label>
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
        ADD NEW <Icon type={IconTypes.plus} />
      </Styled.AddNewButton>
    </div>
  )
}
