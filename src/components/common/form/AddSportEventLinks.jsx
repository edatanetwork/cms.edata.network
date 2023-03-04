import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'

import {
  useUpdateLinkMutation,
  useCreateLinkMutation,
  useDeleteLinkMutation
} from 'app/services/common/links'
import { useGetChannelsQuery } from 'app/services/tv/channels'
import { throwToast } from 'utils/throwToast'

import LanguageSelect from '../select/LanguageSelect'

import Input from 'components/common/form/Input'
import Dropdown from 'components/common/form/Dropdown'
import Icon, { IconTypes } from 'components/common/Icon'
import { RoundButton } from 'components/styled/common/Button.styled'
import * as L from 'components/styled/common/AddLinks.styled'

const AddSportEventLinks = ({ name }) => {
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

export default AddSportEventLinks

const Link = ({ name, index, id, existing, remove }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { watch } = useFormContext()
  const [updateLink] = useUpdateLinkMutation()
  const [createLink] = useCreateLinkMutation()
  const [deleteLink] = useDeleteLinkMutation()
  const current = useSelector(state => state.current.current)
  const { data, isLoading } = useGetChannelsQuery()

  const handleUpdate = e => {
    e.stopPropagation()

    const body = {
      url: watch(`${name}.${index}.url`),
      quality: watch(`${name}.${index}.quality`),
      language_id: watch(`${name}.${index}.language_id`),
      link_channel_id: watch(`${name}.${index}.channel_id`)
    }

    const promise = updateLink({ id, body }).unwrap()
    throwToast(promise, 'Updating link!', 'Link updated')
  }

  const handleCreate = e => {
    e.stopPropagation()

    const body = {
      sport_event_id: current.id,
      url: watch(`${name}.${index}.url`),
      language_id: watch(`${name}.${index}.language_id`),
      link_channel_id: watch(`${name}.${index}.channel_id`),
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
          {isOpen && (
            <>
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
            </>
          )}
          <Icon type={IconTypes.chevronUp} />
        </L.Actions>
      </L.Header>
      <L.Fields isOpen={isOpen}>
        <Input
          label='Livestream Link'
          placeholder='Livestream url'
          name={`${name}.${index}.url`}
        />
        <LanguageSelect
          label='Language'
          name={`${name}.${index}.language_id`}
        />
        <Dropdown
          isLoading={isLoading}
          label='Channel Name'
          name={`${name}.${index}.channel_id`}
          options={data?.channels}
        />
        <Dropdown
          label='Quality'
          name={`${name}.${index}.quality`}
          options={[{ name: 'HD', id: 'hd' }]}
        />
      </L.Fields>
    </L.Link>
  )
}
