import styled from 'styled-components'

import { useGetStatsQuery, useDownloadPdfMutation } from 'app/services/stats'

import Icon, { IconTypes } from 'components/common/Icon'

const Statistics = ({ domainId }) => {
  const { data } = useGetStatsQuery({ id: domainId })

  const [downloadPdf] = useDownloadPdfMutation()

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '24px auto 0 auto',
        height: 'calc(100vh - 450px)',
        overflowY: 'auto'
      }}
    >
      <P>
        <Icon type={IconTypes.calendar} />
        STATISTICS
      </P>
      <Table>
        <thead>
          <tr>
            <td>Month</td>
            <td>Downloads</td>
            <td>Likes</td>
            <td>Dislikes</td>
            <td>Submitted</td>
            <td>Reports</td>
          </tr>
        </thead>
        <tbody>
          {data?.statistics_monthly.map(row => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td>{row.downloads}</td>
              <td>{row.likes}</td>
              <td>{row.dislikes}</td>
              <td>{row.submitted}</td>
              <td>{row.reports}</td>
              <td>
                <button
                  onClick={async () =>
                    downloadPdf({
                      id: domainId,
                      body: { month: row.month_nr }
                    })
                  }
                >
                  <Icon type={IconTypes.download} /> PDF
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>
              {data?.statistics_monthly
                .map(item => item.downloads)
                .reduce((acc, curr) => acc + curr)}
            </td>
            <td>
              {data?.statistics_monthly
                .map(item => item.likes)
                .reduce((acc, curr) => acc + curr)}
            </td>
            <td>
              {data?.statistics_monthly
                .map(item => item.dislikes)
                .reduce((acc, curr) => acc + curr)}
            </td>
            <td>
              {data?.statistics_monthly
                .map(item => item.reports)
                .reduce((acc, curr) => acc + curr)}
            </td>
            <td>
              {data?.statistics_monthly
                .map(item => item.submitted)
                .reduce((acc, curr) => acc + curr)}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Statistics

const P = styled.p`
  font-size: 14px;
  font-weight: 600;

  svg {
    width: 12px;
    margin-right: 0.5rem;
  }
`

const Table = styled.table`
  width: 100%;

  thead {
    tr {
      border-bottom: 4px solid rgba(0, 0, 0, 0.05);
      padding-bottom: 10px;
    }

    td {
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  tbody {
    tr {
      height: 47px;
      align-items: center;

      &:not(:last-of-type) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }

      &:nth-last-of-type(2) {
        border-bottom: 2px solid #000;
      }

      td {
        font-size: 14px;
        font-weight: 500;

        &:not(:first-of-type) {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  tr {
    display: grid;
    grid-template-columns: 2fr repeat(5, 1fr) 0.5fr;
  }

  td {
    button {
      padding: 2.5px 5px;
      border: 0;
      border-radius: 2px;
      color: #000;
      font-weight: 600;
      background-color: transparent;
      transition: all 150ms ease-in-out;

      svg {
        width: 12px;
        path {
          transition: all 150ms ease-in-out;
        }
      }

      &:hover {
        background-color: #ff7f00;
        color: #fff;

        svg {
          path {
            fill: #fff;
          }
        }
      }
    }
  }
`
