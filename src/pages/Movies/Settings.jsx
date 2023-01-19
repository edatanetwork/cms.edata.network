import { Routes, Route } from 'react-router-dom'

import Settings from 'components/common/Settings'
import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Categories from 'components/movies/settings/categories'
import AdsTable from 'components/common/settings/AdsTable'

import CountryForm from 'components/common/settings/CountryForm'
import LanguageForm from 'components/common/settings/LanguageForm'
import DomainForm from 'components/common/settings/DomainForm'
import AdForm from 'components/common/settings/AdForm'

import { Grid } from 'components/styled/common/Grid.styled'

const SettingsPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Settings path='/movies'>
          <Route path='/categories/*' element={<Categories />} />
          <Route path='/domains' element='[domains]' />
          <Route path='/ads' element={<AdsTable />} />
        </Settings>
      </Grid>
      <Routes>
        <Route
          path='/categories'
          element={<Sidebar title='Genre' form='categories-genre'></Sidebar>}
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
