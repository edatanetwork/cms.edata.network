import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

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
        <Link key={field.id} name={name} index={index} />
      ))}
      <RoundButton type='button' onClick={() => append()}>
        <Icon type={IconTypes.plusCircle} /> Add Link
      </RoundButton>
    </L.LinkList>
  )
}

export default AddSportEventLinks

const Link = ({ name, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <L.Link>
      <L.Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        Link <Icon type={IconTypes.chevronUp} />
      </L.Header>
      <L.Fields isOpen={isOpen}>
        <Input
          label='Livestream Link'
          name={`${name}.${index}.livestream_link`}
        />
        <Dropdown label='Language' name={`${name}.${index}.language_id`} />
        <Dropdown label='Channel Name' name={`${name}.${index}.channel_name`} />
        <Dropdown label='Quality' name={`${name}.${index}.quality`} />
      </L.Fields>
    </L.Link>
  )
}
