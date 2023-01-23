import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'

import {
  useUpdateLinkMutation,
  useCreateLinkMutation,
  useDeleteLinkMutation
} from 'app/common/links'
import { throwToast } from 'utils/throwToast'

import Input from 'components/common/form/Input'
import Dropdown from 'components/common/form/Dropdown'
import Icon, { IconTypes } from 'components/common/Icon'
import { RoundButton } from 'components/styled/common/Button.styled'
import * as L from 'components/styled/common/AddLinks.styled'

const AddTvEventLinks = ({ name }) => {
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

export default AddTvEventLinks

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
      quality: watch(`${name}.${index}.quality`)
    }

    const promise = updateLink({ id, body }).unwrap()
    throwToast(promise, 'Updating link!', 'Link updated')
  }

  const handleCreate = () => {
    const body = {
      url: watch(`${name}.${index}.url`),
      quality: watch(`${name}.${index}.quality`),
      channel_id: current.id
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
          {existing ? (
            <L.Button type='button' onClick={handleUpdate}>
              <Icon type={IconTypes.edit} />
            </L.Button>
          ) : (
            <L.Button type='button' onClick={handleCreate}>
              <Icon type={IconTypes.plusV2} />
            </L.Button>
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
      </L.Fields>
    </L.Link>
  )
}
