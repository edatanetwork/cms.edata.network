import { Routes, Route } from 'react-router-dom'

import Layout from 'layout/WithNavbar'
import Home from 'pages/Movies/Home'
import Settings from 'pages/Movies/Settings'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'

import Trash from 'components/movies/TrashTable'
import MovieEventForm from 'components/movies/home/MovieEventForm'

const TV = () => {
  return (
    <Layout path='/movies'>
      <Routes>
        <Route index element={<Home />} />
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
        <Route path='/settings/*' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default TV
