import type { NextPage } from 'next'
import { useTimeAgo } from 'next-time-ago'

const Home: NextPage = () => {
  const { TimeAgo } = useTimeAgo();

  return (
    <>
      <TimeAgo />
    </>
  )
}

export default Home
