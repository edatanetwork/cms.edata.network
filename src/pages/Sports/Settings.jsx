import { Routes, Route } from 'react-router-dom'

import Settings from 'components/common/Settings'
import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Categories from 'components/sports/settings/categories'
import AdsTable from 'components/common/settings/AdsTable'

import SportForm from 'components/sports/settings/categories/SportForm'
import CountryForm from 'components/common/settings/CountryForm'
import LanguageForm from 'components/common/settings/LanguageForm'
import LeagueForm from 'components/sports/settings/categories/LeagueForm'
import TeamForm from 'components/sports/settings/categories/TeamForm'
import DomainForm from 'components/common/settings/DomainForm'
import AdForm from 'components/common/settings/AdForm'

import { Grid } from 'components/styled/common/Grid.styled'

const SettingsPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Settings path='/sports'>
          <Route path='/categories/*' element={<Categories />} />
          <Route path='/domains' element='[domains]' />
          <Route path='/ads' element={<AdsTable />} />
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
        <Route
          path='/domains'
          element={
            <Sidebar title='Domain' form='domain'>
              <DomainForm />
            </Sidebar>
          }
        />
        <Route
          path='/ads'
          element={
            <Sidebar title='Ad' form='ad'>
              <AdForm />
            </Sidebar>
          }
        />
      </Routes>
    </Grid>
  )
}

export default SettingsPage
