import { Routes, Route } from 'react-router-dom'

import Home from 'pages/Design/Home'
import Settings from 'pages/Design/Settings'
import TrashPage from 'pages/Design/Trash'
import SubmittedPage from 'pages/Design/Submitted'
import ReportsPage from 'pages/Design/Reports'
import StatisticsPage from 'pages/Design/Statistics'
import SearchedPage from 'pages/Design/Searched'
import NotFound from 'pages/NotFound'

import Page from 'layout/Page'
import PostsVote from 'features/votes/PostsVote'
import Form from 'components/design/Form'

const Design = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/settings/*' element={<Settings />} />
      <Route path='/trash' element={<TrashPage />} />
      <Route
        path='/votes'
        element={
          <Page
            table={<PostsVote />}
            form={<Form />}
            sidebarTitle='Post'
            formId='post'
          />
        }
      />
      <Route path='/submitted' element={<SubmittedPage />} />
      <Route path='/reports' element={<ReportsPage />} />
      <Route path='/statistics' element={<StatisticsPage />} />
      <Route path='/searched' element={<SearchedPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Design
