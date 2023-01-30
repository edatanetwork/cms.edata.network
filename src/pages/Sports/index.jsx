import { Routes, Route } from 'react-router-dom'

import Layout from 'layout/WithNavbar'
import Home from 'pages/Sports/Home'
import Votes from 'pages/Sports/Votes'
import Reports from 'pages/Sports/Votes'
import Submitted from 'pages/Sports/Submitted'
import Settings from 'pages/Sports/Settings'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'
import TrashTable from 'components/sports/TrashTable'

import SportEventForm from 'components/sports/home/SportEventForm'

const Sports = () => {
  return (
    <Layout path='/sports'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/trash'
          element={
            <Page
              table={<TrashTable />}
              form={<SportEventForm />}
              sidebarTitle='Match'
              formId='sport-event'
            />
          }
        />
        <Route path='/votes' element={<Votes />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/submitted' element={<Submitted />} />
        <Route path='/settings/*' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default Sports
