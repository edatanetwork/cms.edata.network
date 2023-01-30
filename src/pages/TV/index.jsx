import { Routes, Route } from 'react-router-dom'

import Layout from 'layout/WithNavbar'
import Home from 'pages/TV/Home'
import Settings from 'pages/TV/Settings'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'

import Trash from 'components/tv/TrashTable'
import TvEventForm from 'components/tv/home/TvEventForm'

const TV = () => {
  return (
    <Layout path='/tv'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/submitted' element={<Page />} />
        <Route
          path='/trash'
          element={
            <Page
              table={<Trash />}
              form={<TvEventForm />}
              sidebarTitle='Channel'
              formId='tv-event'
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
