import { Routes, Route } from 'react-router-dom'

import Home from 'pages/Movies/Home'
import Settings from 'pages/Movies/Settings'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'

import VotesTable from 'components/movies/VotesTable'
import MovieEventForm from 'components/movies/home/MovieEventForm'

import MoviesTrash from 'features/trash/MoviesTrash'
import MoviesReport from 'features/reports/MoviesReport'
import MoviesSubmitted from 'features/submitted/MoviesSubmitted'

const TV = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/searched' element={<Page />} />
      <Route
        path='/trash'
        element={
          <Page
            table={<MoviesTrash />}
            form={<MovieEventForm />}
            sidebarTitle='Movie'
            formId='movie-event'
          />
        }
      />
      <Route path='/votes' element={<Page table={<VotesTable />} />} />
      <Route path='/submitted' element={<Page table={<MoviesSubmitted />} />} />
      <Route path='/reports' element={<Page table={<MoviesReport />} />} />
      <Route path='/settings/*' element={<Settings />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default TV
