'use client'

import { useTimeAgo } from 'next-timeago'

export default function Home() {
  const { TimeAgo } = useTimeAgo()

  return (
    <main>
      <TimeAgo date='July 1, 2023' />
    </main>
  )
}
