import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function aboutus({aboutpage}) {
  return (
    <>
      <Head>
        <title>About - Basic WP Setup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-2">
        <Navbar />

        <h1>About - Gridspective</h1>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://gridspective.com/Website-Demos/wp-react-next/wp-json/wp/v2/pages?acf_format=standard')
  const aboutpage = await res.json();
  return {
    props: {
      aboutpage,
    },
  }
}