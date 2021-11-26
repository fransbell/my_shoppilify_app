import Head from "next/head"
import React from "react"
import AppMainManager from "../components/AppMainManager"

function app() {
  return (
    <>
      <Head>
        <link rel="icon" href="icons/logo.svg" type="image/x-icon" />
        <title>My Shoppilify | Manage Shop Enjoys</title>
      </Head>
      <AppMainManager />
    </>
  )
}

export default app
