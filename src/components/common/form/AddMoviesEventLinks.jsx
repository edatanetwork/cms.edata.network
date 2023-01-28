import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFieldArray, useFormContext } from 'react-hook-form'

import {
  useUpdateLinkMutation,
  useCreateLinkMutation,
  useDeleteLinkMutation
} from 'app/services/common/links'
import { throwToast } from 'utils/throwToast'

import Input from 'components/common/form/Input'
import Dropdown from 'components/common/form/Dropdown'
import Icon, { IconTypes } from 'components/common/Icon'
import { RoundButton } from 'components/styled/common/Button.styled'
import * as L from 'components/styled/common/AddLinks.styled'
import LanguageSelect from '../select/LanguageSelect'

const AddMoviesEventLinks = ({ name }) => {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({ control, name })

  return (
    <L.LinkList>
      {fields.map((field, index) => (
        <Link
          key={field.id}
          name={name}
          index={index}
          id={field.linkId}
          existing={field.existing}
          remove={remove}
        />
      ))}
      <RoundButton type='button' onClick={() => append()}>
        <Icon type={IconTypes.plusCircle} /> Add Link
      </RoundButton>
    </L.LinkList>
  )
}

export default AddMoviesEventLinks

const Link = ({ name, index, id, existing, remove }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { watch } = useFormContext()
  const [updateLink] = useUpdateLinkMutation()
  const [createLink] = useCreateLinkMutation()
  const [deleteLink] = useDeleteLinkMutation()
  const current = useSelector(state => state.current.current)

  const handleUpdate = e => {
    e.stopPropagation()

    const body = {
      url: watch(`${name}.${index}.url`),
      quality: watch(`${name}.${index}.quality`),
      language_id: watch(`${name}.${index}.language_id`)
    }

    const promise = updateLink({ id, body }).unwrap()
    throwToast(promise, 'Updating link!', 'Link updated')
  }

  const handleCreate = e => {
    e.stopPropagation()

    const body = {
      movie_id: current.id,
      url: watch(`${name}.${index}.url`),
      language_id: watch(`${name}.${index}.language_id`),
      quality: watch(`${name}.${index}.quality`)
    }

    const promise = createLink(body).unwrap()
    throwToast(promise, 'Creating link!', 'Link created')
  }

  const handleDelete = () => {
    if (existing) {
      const promise = deleteLink(id).unwrap()
      throwToast(promise, 'Deleting link!', 'Link deleted')
      remove(index)
    } else {
      remove(index)
    }
  }

  return (
    <L.Link>
      <L.Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        Link
        <L.Actions>
          {current && (
            <>
              {existing ? (
                <L.Button type='button' onClick={handleUpdate}>
                  <Icon type={IconTypes.edit} />
                </L.Button>
              ) : (
                <L.Button type='button' onClick={handleCreate}>
                  <Icon type={IconTypes.plusV2} />
                </L.Button>
              )}
            </>
          )}
          <L.Button type='button' onClick={handleDelete}>
            <Icon type={IconTypes.delete} />
          </L.Button>
          <Icon type={IconTypes.chevronUp} />
        </L.Actions>
      </L.Header>
      <L.Fields isOpen={isOpen}>
        <Input label='Livestream Link' name={`${name}.${index}.url`} />
        <Dropdown
          label='Quality'
          name={`${name}.${index}.quality`}
          options={[{ name: 'HD', id: 'hd' }]}
        />
        <LanguageSelect name={`${name}.${index}.language_id`} />
      </L.Fields>
    </L.Link>
  )
}
