import type { NextPage } from 'next'
import { useTimeAgo } from 'next-time-ago'

const Home: NextPage = () => {
  const { TimeAgo } = useTimeAgo();

  return (
    <>
      <TimeAgo date='June 19, 2022' />
    </>
  )
}

export default Home
