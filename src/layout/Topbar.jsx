import { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import debounce from 'lodash.debounce'

import { useImportCSVMutation } from 'app/services/posts'
import { clearCurrent } from 'features/currentSlice'
import { throwToast } from 'utils/throwToast'

import Icon, { IconTypes } from 'components/common/Icon'
import { Field, Body, Input } from 'components/styled/common/Field.styled'
import { Button } from 'components/styled/common/Button.styled'
import * as Styled from 'components/styled/layout/Topbar.styled'

const Topbar = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const current = useSelector(state => state.current.current)

  const [importCSV] = useImportCSVMutation()

  const page = useCallback(
    () => pageInfo(location.pathname),
    [location.pathname]
  )

  const handleChange = e => {
    const body = new FormData()
    body.append(`file`, e.target.files[0])

    const promise = importCSV(body).unwrap()
    throwToast(promise, 'Uploading CSV!', 'CSV uploaded!')
  }

  const handleSearch = e => {
    if (e.target.value === '') {
      searchParams.delete(e.target.name)
      setSearchParams(Object.fromEntries(searchParams))
    } else {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        search: e.target.value
      })
    }
  }

  const debouncedHandleSearch = debounce(handleSearch, 1000)

  return (
    <Styled.Topbar>
      <Button>
        <Icon type={IconTypes.menu} />
        {page().title}
      </Button>

      {page().search && (
        <Styled.Search>
          <Field>
            <Body>
              <Input
                name='search'
                type='search'
                placeholder='Search'
                onChange={debouncedHandleSearch}
              />
              <Icon type={IconTypes.search} />
            </Body>
          </Field>
        </Styled.Search>
      )}

      {page().home ? (
        <Styled.Buttons>
          <input
            onChange={handleChange}
            ref={inputRef}
            style={{ visibility: 'hidden', position: 'absolute', width: 0 }}
            type='file'
          />
          <Button onClick={() => inputRef.current.click()}>
            <Icon type={IconTypes.attach} />
            Import
          </Button>
          <hr />
          <Button onClick={() => current && dispatch(clearCurrent())}>
            <Icon type={IconTypes.plusCircle} />
            Add post
          </Button>
        </Styled.Buttons>
      ) : (
        <Button onClick={() => current && dispatch(clearCurrent())}>
          {`Add ${page().btnTitle}`}
          <Icon type={IconTypes.plusCircle} />
        </Button>
      )}
    </Styled.Topbar>
  )
}

export default Topbar

const pageInfo = path => {
  switch (path) {
    case '/design/settings/categories':
    case '/design/settings/categories/subcategory':
    case '/design/settings/categories/application':
    case '/sports/settings/categories':
    case '/sports/settings/categories/countries':
    case '/sports/settings/categories/languages':
    case '/sports/settings/categories/leagues':
    case '/sports/settings/categories/teams':
    case '/movies/settings/categories':
    case '/movies/settings/categories/countries':
    case '/movies/settings/categories/languages':
    case '/tv/settings/categories':
    case '/tv/settings/categories/countries':
    case '/tv/settings/categories/languages':
      return {
        title: 'Categories',
        btnTitle: 'Category',
        search: false,
        home: false
      }
    case '/design/settings/domains':
    case '/sports/settings/domains':
    case '/movies/settings/domains':
    case '/tv/settings/domains':
      return { title: 'Domains', btnTitle: 'Domain', search: true, home: false }
    case '/design/settings/tags':
      return { title: 'Tags', btnTitle: 'Tag', search: true, home: false }
    case '/design/settings/redirect':
      return {
        title: 'Redirect',
        btnTitle: 'Redirect',
        search: true,
        home: false
      }
    case '/design/settings/ads':
    case '/sports/settings/ads':
    case '/movies/settings/ads':
    case '/tv/settings/ads':
      return { title: 'Ads', btnTitle: 'Ad', search: false, home: false }
    case '/design/trash':
    case '/sports/trash':
    case '/movies/trash':
    case '/tv/trash':
      return { title: 'Trash', btnTitle: 'Post', search: true, home: false }
    case '/design/votes':
    case '/sports/votes':
    case '/movies/votes':
    case '/tv/votes':
      return { title: 'Votes', btnTitle: 'Post', search: true, home: false }
    case '/design/submitted':
    case '/sports/submitted':
    case '/movies/submitted':
    case '/tv/submitted':
      return { title: 'Submitted', btnTitle: 'Post', search: true, home: false }
    case '/design/reports':
    case '/sports/reports':
    case '/movies/reports':
    case '/tv/reports':
      return { title: 'Reports', btnTitle: 'Post', search: true, home: false }
    case '/design/searched':
    case '/sports/searched':
    case '/movies/searched':
    case '/tv/searched':
      return { title: 'Searched', btnTitle: 'Post', search: true, home: false }
    default:
      return { title: 'All Posts', search: true, home: true }
  }
}
