import { Routes, Route } from 'react-router-dom'

import Settings from 'components/common/Settings'
import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Categories from 'components/sports/settings/categories'

import SportForm from 'components/sports/settings/categories/SportForm'
import CountryForm from 'components/common/categories/CountryForm'
import LanguageForm from 'components/common/categories/LanguageForm'
import LeagueForm from 'components/sports/settings/categories/LeagueForm'
import TeamForm from 'components/sports/settings/categories/TeamForm'

import { Grid } from 'components/styled/common/Grid.styled'

const SettingsPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Settings path='/sports'>
          <Route path='/categories/*' element={<Categories />} />
          <Route path='/domains' element='[domains]' />
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
        <Route
          path='/categories/countries'
          element={
            <Sidebar title='Country' form='categories-country'>
              <CountryForm />
            </Sidebar>
          }
        />
        <Route
          path='/categories/languages'
          element={
            <Sidebar title='Language' form='categories-language'>
              <LanguageForm />
            </Sidebar>
          }
        />
        <Route
          path='/categories/leagues'
          element={
            <Sidebar title='League' form='categories-league'>
              <LeagueForm />
            </Sidebar>
          }
        />
        <Route
          path='/categories/teams'
          element={
            <Sidebar title='Team' form='categories-team'>
              <TeamForm />
            </Sidebar>
          }
        />
      </Routes>
    </Grid>
  )
}

export default SettingsPage
