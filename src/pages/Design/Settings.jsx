import { Routes, Route } from 'react-router-dom'

import Settings from 'components/common/Settings'
import Topbar from 'layout/Topbar'
import Grid from 'components/styled/common/Grid.styled'
import Sidebar from 'layout/Sidebar'

import Categories from 'components/design/settings/categories'
import DomainTable from 'components/design/settings/DomainTable'
import TagsTable from 'components/design/settings/TagTable'
import RedirectTable from 'components/design/settings/RedirectTable'
import AdTable from 'components/design/settings/AdsTable'

import CategoryForm from 'components/design/settings/categories/CategoryForm'
import SubcategoryForm from 'components/design/settings/categories/SubcategoryForm'
import ApplicationForm from 'components/design/settings/categories/ApplicationForm'
import DomainForm from 'components/design/settings/DomainForm'
import TagForm from 'components/design/settings/TagForm'
import RedirectForm from 'components/design/settings/RedirectForm'
import AdForm from 'components/design/settings/AdForm'

const SettingsPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Settings path='/design'>
          <Route path='/categories/*' element={<Categories />} />
          <Route path='/domains' element={<DomainTable />} />
          <Route path='/tags' element={<TagsTable />} />
          <Route path='/redirect' element={<RedirectTable />} />
          <Route path='/ads' element={<AdTable />} />
        </Settings>
      </Grid>
      <Routes>
        <Route
          path='/categories'
          element={
            <Sidebar title='Category' form='category'>
              <CategoryForm />
            </Sidebar>
          }
        />
        <Route
          path='/categories/subcategory'
          element={
            <Sidebar title='Subcategory' form='subcategory'>
              <SubcategoryForm />
            </Sidebar>
          }
        />
        <Route
          path='/categories/application'
          element={
            <Sidebar title='Application' form='application'>
              <ApplicationForm />
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
          path='/tags'
          element={
            <Sidebar title='Tag' form='tag'>
              <TagForm />
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
        <Route
          path='/redirect'
          element={
            <Sidebar title='Redirect' form='redirect'>
              <RedirectForm />
            </Sidebar>
          }
        />
      </Routes>
    </Grid>
  )
}

export default SettingsPage
