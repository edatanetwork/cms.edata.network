import { Routes, Route } from 'react-router-dom'

import Settings from 'components/common/Settings'
import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Categories from 'components/sports/settings/categories'

import SportForm from 'components/sports/settings/categories/SportForm'

import { Grid } from 'components/styled/common/Grid.styled'

const SettingsPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Settings path='/sports'>
          <Route path='/categories/*' element={<Categories />} />
          <Route path='/domains' element='[domains]' />
          <Route path='/tags' element='[tags]' />
          <Route path='/ads' element='[ads]' />
        </Settings>
      </Grid>
      <Routes>
        <Route
          path='/categories'
          element={
            <Sidebar title='Sport' form='categories-sport'>
              <SportForm />
            </Sidebar>
          }
        />
      </Routes>
    </Grid>
  )
}

export default SettingsPage
