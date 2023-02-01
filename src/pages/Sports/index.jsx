import { Routes, Route } from 'react-router-dom'

import Layout from 'layout/WithNavbar'
import Home from 'pages/Sports/Home'
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
        <Route path='/searched' element={<Page />} />
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
        <Route path='/votes' element={<Page />} />
        <Route path='/submitted' element={<Page />} />
        <Route path='/reports' element={<Page />} />
        <Route path='/settings/*' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default Sports
