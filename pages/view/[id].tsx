import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'
import ConstmeticItem from '../../src/component/CosmeticItem'

export const getServerSideProps = async (context: any) => {
  const id = context.params.id
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  const res = await axios.get(apiUrl)
  const data = res.data
  return {
    props: {
      item: data
    }
  }
}

const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '740' } }, { params: { id: '730' } }, { params: { id: '729' } }],
    fallback: true
  }
}

const Post = ({ item }: any) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {item && <ConstmeticItem item={item} />}
    </>
  )
}

export default Post
