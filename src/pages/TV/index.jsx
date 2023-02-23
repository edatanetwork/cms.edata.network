import { Routes, Route } from 'react-router-dom'

import Home from 'pages/TV/Home'
import Settings from 'pages/TV/Settings'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'

import Trash from 'components/tv/TrashTable'
import Votes from 'components/tv/VotesTable'
import TvEventForm from 'components/tv/home/TvEventForm'

const TV = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/searched' element={<Page />} />
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
      <Route path='/votes' element={<Page table={<Votes />} />} />
      <Route path='/submitted' element={<Page />} />
      <Route path='/reports' element={<Page />} />
      <Route path='/settings/*' element={<Settings />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default TV
