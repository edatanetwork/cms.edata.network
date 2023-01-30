import { Routes, Route } from 'react-router-dom'

import Settings from 'components/common/Settings'
import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Categories from 'components/tv/settings/categories'
import AdsTable from 'components/common/settings/AdsTable'
import Domains from 'components/tv/settings/DomainTable'

import CountryForm from 'components/common/settings/CountryForm'
import LanguageForm from 'components/common/settings/LanguageForm'
import DomainForm from 'components/common/settings/DomainForm'
import AdForm from 'components/common/settings/AdForm'
import GenreForm from 'components/common/settings/GenreForm'

import {
  useCreateTvGenreMutation,
  useUpdateTvGenreMutation
} from 'app/services/tv/genre'

import { useGetDomainsQuery } from 'app/services/common/domains'

import { Grid } from 'components/styled/common/Grid.styled'

const SettingsPage = () => {
  const [createTvGenre] = useCreateTvGenreMutation()
  const [updateTvGenre] = useUpdateTvGenreMutation()

  const { data, isLoading } = useGetDomainsQuery({ type: 'channels' })

  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Settings path='/tv'>
          <Route path='/categories/*' element={<Categories />} />
          <Route path='/domains' element={<Domains />} />
          <Route
            path='/ads'
            element={<AdsTable domains={data} isLoading={isLoading} />}
          />
        </Settings>
      </Grid>
      <Routes>
        <Route
          path='/categories'
          element={
            <Sidebar title='Genre' form='categories-genre'>
              <GenreForm create={createTvGenre} update={updateTvGenre} />
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
          path='/domains'
          element={
            <Sidebar title='Domain' form='domain'>
              <DomainForm type='channels' />
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
