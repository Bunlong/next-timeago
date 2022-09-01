import type { NextPage } from 'next'
import { useTimeAgo } from 'next-time-ago'

const Home: NextPage = () => {
  const { TimeAgo } = useTimeAgo();

  return (
    <>
      <TimeAgo date='August 6, 2022' />
      <br/>
      <TimeAgo date='July 1, 2022' />
      {/* <TimeAgo date='August 6, 2022 9:00 pm' />
      <TimeAgo date='August 6, 2022 20:00' /> */}
    </>
  )
}

export default Home
