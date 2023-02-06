import { Routes, Route } from 'react-router-dom'

import Layout from 'layout/WithNavbar'
import Home from 'pages/Movies/Home'
import Settings from 'pages/Movies/Settings'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'

import Trash from 'components/movies/TrashTable'
import VotesTable from 'components/movies/VotesTable'
import MovieEventForm from 'components/movies/home/MovieEventForm'

const TV = () => {
  return (
    <Layout path='/movies'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/searched' element={<Page />} />
        <Route
          path='/trash'
          element={
            <Page
              table={<Trash />}
              form={<MovieEventForm />}
              sidebarTitle='Movie'
              formId='movie-event'
            />
          }
        />
        <Route path='/votes' element={<Page table={<VotesTable />} />} />
        <Route path='/submitted' element={<Page />} />
        <Route path='/reports' element={<Page />} />
        <Route path='/settings/*' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default TV
