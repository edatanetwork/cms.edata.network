import { Routes, Route } from 'react-router-dom'

import NotFound from 'pages/NotFound'
import SettingsNav from 'layout/SettingsNav'
import Grid from 'components/styled/common/Grid.styled'

const Settings = ({ children, path }) => {
  return (
    <Grid columns='auto 1fr'>
      <SettingsNav path={path} />
      <Routes>
        {children}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Grid>
  )
}

export default Settings
