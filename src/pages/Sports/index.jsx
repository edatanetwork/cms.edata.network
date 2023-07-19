import { Routes, Route } from 'react-router-dom'

import Home from 'pages/Sports/Home'
import Settings from 'pages/Sports/Settings'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'
import VotesTable from 'components/sports/VotesTable'
import SportEventForm from 'components/sports/home/SportEventForm'

import SportsTrash from 'features/trash/SportsTrash'
import SportsReport from 'features/reports/SportsReport'
import SportsSubmitted from 'features/submitted/SportsSubmitted'

import SubmittedSportsFields from 'components/sports/SubmittedSportsFields'

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
      <Route
        path='/votes'
        element={<Page table={<VotesTable />} form={<SportEventForm />} />}
      />
      <Route
        path='/submitted/*'
        element={
          <Page
            table={<SportsSubmitted />}
            form={
              <Routes>
                <Route index element={<SubmittedSportsFields />} />
                <Route path=':id' element={<SubmittedSportsFields />} />
              </Routes>
            }
          />
        }
      ></Route>
      <Route path='/reports' element={<Page table={<SportsReport />} />} />
      <Route path='/settings/*' element={<Settings />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Sports
