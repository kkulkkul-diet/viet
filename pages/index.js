// redeploy trigger by kayla
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DietMealWebView = dynamic(() => import('../components/DietMealWebView'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>꿀꿀 다이어트 식단</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <DietMealWebView />
    </>
  )
}
