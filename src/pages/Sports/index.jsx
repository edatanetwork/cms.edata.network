import { Routes, Route } from 'react-router-dom'

import Home from 'pages/Sports/Home'
import Settings from 'pages/Sports/Settings'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'
import VotesTable from 'components/sports/VotesTable'
import SportEventForm from 'components/sports/home/SportEventForm'

import SportsTrash from 'features/trash/SportsTrash'
import SportsReport from 'features/reports/SportsReport'

const Sports = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/searched' element={<Page />} />
      <Route
        path='/trash'
        element={
          <Page
            table={<SportsTrash />}
            form={<SportEventForm />}
            sidebarTitle='Match'
            formId='sport-event'
          />
        }
      />
      <Route path='/votes' element={<Page table={<VotesTable />} />} />
      <Route path='/submitted' element={<Page />} />
      <Route path='/reports' element={<Page table={<SportsReport />} />} />
      <Route path='/settings/*' element={<Settings />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Sports
