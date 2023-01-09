import { Route } from 'react-router-dom'

import Settings from 'components/common/Settings'

const SettingsPage = () => {
  return (
    <Settings path='/sports'>
      <Route path='/categories' element='[categories]' />
      <Route path='/domains' element='[domains]' />
      <Route path='/tags' element='[tags]' />
      <Route path='/ads' element='[ads]' />
    </Settings>
  )
}

export default SettingsPage
