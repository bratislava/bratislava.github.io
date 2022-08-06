import React from "react"
import OriginalLayout from "@theme-original/Layout"
import Head from "@docusaurus/Head"
import { useLocation } from "@docusaurus/router"

export default function Layout(props) {
  const location = useLocation()
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e46054" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <OriginalLayout {...props} />
    </>
  )
}
