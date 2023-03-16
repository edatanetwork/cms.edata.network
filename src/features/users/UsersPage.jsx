import { Routes, Route } from 'react-router-dom'

import Page from 'layout/Page'
import UsersTable from './UsersTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

const UsersPage = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Page
            sidebarTitle='User'
            formId='create-user'
            table={<UsersTable />}
            form={<AddUserForm />}
          />
        }
      />
      <Route
        path='/edit/:id'
        element={
          <Page
            sidebarTitle='User'
            formId='update-user'
            table={<UsersTable />}
            form={<EditUserForm />}
          />
        }
      />
    </Routes>
  )
}

export default UsersPage
