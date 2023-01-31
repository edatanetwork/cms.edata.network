import styled from 'styled-components'

import { useSearchParams } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Icon, { IconTypes } from 'components/common/Icon'

const Reports = ({ data }) => {
  const [maxDownloads, setMaxDownloads] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (data) {
      setMaxDownloads(
        Math.max(...data.this_month_downloads.map(day => day.downloads))
      )
    }
    // eslint-disable-next-line
  }, [data])

  const handleClick = value => {
    const prev = Object.fromEntries(searchParams)
    setSearchParams({ ...prev, filter: value })
  }

  const handleByDay = day => {
    const prev = Object.fromEntries(searchParams)
    setSearchParams({ ...prev, by_day: day })
  }

  return (
    <TopContent>
      <Container>
        <div>
          <Title>
            <h3>
              <Icon type={IconTypes.statistics} />
              Reports
            </h3>
            <button
              data-active={searchParams.get('filter') === null}
              onClick={() => {
                searchParams.delete('filter')
                const prev = Object.fromEntries(searchParams)
                setSearchParams({ ...prev })
              }}
            >
              All Time
            </button>
            <button>Last</button>
            <button
              data-active={searchParams.get('filter') === 'seven_days'}
              onClick={() => handleClick('seven_days')}
            >
              7 Days
            </button>
            <button
              data-active={searchParams.get('filter') === 'thirty_days'}
              onClick={() => handleClick('thirty_days')}
            >
              30 Days
            </button>
            <button
              data-active={searchParams.get('filter') === 'ninety_days'}
              onClick={() => handleClick('ninety_days')}
            >
              90 Days
            </button>
            <button
              data-active={searchParams.get('filter') === 'twelve_months'}
              onClick={() => handleClick('twelve_months')}
            >
              12 Months
            </button>
          </Title>
          <Cards>
            <Card
              title='Downloads'
              total={data?.statistics_up.downloads}
              circleColor='#000'
              byDay={data?.by_day_statistics.downloads}
            />
            <Card
              title='Likes'
              total={data?.statistics_up.likes}
              circleColor='#16A066'
              byDay={data?.by_day_statistics.likes}
            />
            <Card
              title='Dislikes'
              total={data?.statistics_up.dislikes}
              circleColor='#FD4A4A'
              byDay={data?.by_day_statistics.dislikes}
            />
            <Card
              title='Submitted'
              total={data?.statistics_up.submitted}
              circleColor='#FEBA2C'
              byDay={data?.by_day_statistics.submitted}
            />
            <Card
              title='Reports'
              total={data?.statistics_up.reports}
              circleColor='#8925FB'
              byDay={data?.by_day_statistics.reports}
            />
          </Cards>
        </div>
        <div>
          <Title>
            <h3>
              <Icon type={IconTypes.downloadRound} />
              THIS MONTH / DOWNLOADS
            </h3>
          </Title>
          <Chart>
            <Data>
              {data?.this_month_downloads.map((item, i) => (
                <Bar
                  onClick={() => handleByDay(item.day)}
                  key={i}
                  height={
                    (isNaN(item.downloads / maxDownloads)
                      ? 0
                      : item.downloads / maxDownloads) * 100
                  }
                />
              ))}
            </Data>

            <XAxis>
              {data?.this_month_downloads.map((item, i) => (
                <span key={i}>{item.day}</span>
              ))}
            </XAxis>
          </Chart>
        </div>
      </Container>
    </TopContent>
  )
}

const Card = ({ title, total, circleColor, byDay }) => (
  <StyledCard color={circleColor}>
    <span>{byDay ? byDay : 0}</span>
    <h1>{total ? total : 0}</h1>
    <p>{title}</p>
  </StyledCard>
)

export default Reports

export const TopContent = styled.div`
  background-color: rgba(235, 238, 241, 0.3);
  height: 420px;
  padding: 2rem 0;
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  align-content: space-between;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  gap: 0.5rem;

  h3 {
    flex-grow: 1;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;

    svg {
      width: 12px;
      margin-right: 6px;
    }
  }

  button {
    border: 0;
    outline: none;
    font-size: 12px;
    background: transparent;
    border-bottom: 2px solid transparent;

    &[data-active='true'] {
      border-color: #000;
    }
  }
`

export const StyledCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  height: 90px;
  display: grid;
  align-content: center;
  padding: 0 2rem;

  span {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 12px;
    font-weight: 600;

    ::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      top: 50%;
      transform: translateY(-50%);
      box-sizing: border-box;
      border: 3px solid ${props => props.color};
      border-radius: 50%;
      margin-left: 4px;
    }
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
  }

  p {
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.clrBlack50};
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`

export const Chart = styled.div``

export const Data = styled.div`
  display: grid;
  align-items: flex-end;
  justify-items: center;
  grid-template-columns: repeat(31, 1fr);
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

export const Bar = styled.div`
  width: 5px;
  height: ${props => props.height}%;
  background-color: #3d474d;
  cursor: pointer;

  &:hover {
    background-color: #ff7f00;
  }
`

export const XAxis = styled.div`
  margin-top: 0.5rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(31, 1fr);

  span {
    font-size: 10px;
    color: #8e999f;
  }
`
