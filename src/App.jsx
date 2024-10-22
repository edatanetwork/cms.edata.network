import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Prefetch from 'features/Prefetch'
import NavbarLayout from 'layout/NavbarLayout'
import ProtectedRoute from 'utils/ProtectedRoute'

import HomePage from 'routes/home'
import TagsPage from 'routes/tags'
import ResourcesPage from 'routes/resources'
import DomainsPage from 'routes/domains'
import UsersPage from 'routes/users'
import ModeratorsPage from 'routes/moderators'
import SubscribersPage from 'routes/subscribers'
import AdsPage from 'routes/ads'
import StatisticsPage from 'routes/statistics'

import ResourcesPostsPage from 'routes/resources/posts'
import ResourcesCategoriesPage from 'routes/resources/categories'
import ResourcesSearchedPage from 'routes/resources/searched'

import ResourcesCategoriesForm from 'features/resources/ResourcesCategoriesForm'
import ResourcesSubcategoriesForm from 'features/resources/ResourcesSubcategoriesForm'
import ResourcesApplicationsForm from 'features/resources/ResourcesApplicationsForm'

import LoginPage from 'routes/login'
import NotFoundPage from 'routes/not-found'

import TestPage from 'routes/test'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Prefetch />}>
            <Route element={<NavbarLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='tags' element={<TagsPage />} />
              <Route path='resources' element={<ResourcesPage />} />
              <Route path='domains' element={<DomainsPage />} />
              <Route path='users' element={<UsersPage />} />
              <Route path='moderators' element={<ModeratorsPage />} />
              <Route path='subscribers' element={<SubscribersPage />} />
              <Route path='ads' element={<AdsPage />} />
              <Route path='statistics' element={<StatisticsPage />} />
              <Route path='resources'>
                <Route path='posts' element={<ResourcesPostsPage />} />
                <Route path='categories' element={<ResourcesCategoriesPage />}>
                  <Route index element={<ResourcesCategoriesForm />} />
                  <Route
                    path='subcategories'
                    element={<ResourcesSubcategoriesForm />}
                  />
                  <Route
                    path='applications'
                    element={<ResourcesApplicationsForm />}
                  />
                </Route>
                <Route path='searched' element={<ResourcesSearchedPage />} />
                <Route path='trash' element={'Trash'} />
                <Route path='votes' element={'Votes'} />
                <Route path='submitted' element={'Submitted'} />
                <Route path='reports' element={'Reports'} />
              </Route>
              <Route path='inspire'>
                <Route path='posts' element={'Posts'} />
                <Route path='categories' element={'Categories'} />
                <Route path='searched' element={'Searched'} />
                <Route path='trash' element={'Trash'} />
                <Route path='votes' element={'Votes'} />
                <Route path='submitted' element={'Submitted'} />
                <Route path='reports' element={'Reports'} />
              </Route>
              <Route path='jobs'>
                <Route path='posts' element={'Posts'} />
                <Route path='categories' element={'Categories'} />
                <Route path='searched' element={'Searched'} />
                <Route path='trash' element={'Trash'} />
                <Route path='votes' element={'Votes'} />
                <Route path='submitted' element={'Submitted'} />
                <Route path='reports' element={'Reports'} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path='login' element={<LoginPage />} />
        <Route path='test' element={<TestPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
