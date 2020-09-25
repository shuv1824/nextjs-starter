import Head from 'next/head'
import Avatar from '../components/avatar'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Head>
        <title>My Next App</title>
      </Head>
      <Avatar />
    </div>
  )
}
