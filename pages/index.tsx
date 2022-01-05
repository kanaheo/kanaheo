import axios, { Axios } from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/component/itemList";

/*
  create-next-app --typescript 로 설치 ! 
  1. 컴파일과 번들링이 자동으로 된다 ! (webpack와 babel)
  2. 자동 리프레쉬 기능으로 수정하면 바로 화면에 반영
  3. 서버사이드 랜더링 지원
  4. 스태틱 파일을 지원
*/

export const getStaticProps = async () =>{
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const res = await axios.get(API_URL);
  const data = res.data

  return {
    props: {
      list: data,
      name: process.env.name
    }
  }
}

const Home: NextPage = ({list}: any) => {
  return (
    <div>
      <Head>
        <title>HOME | 카나치</title>
      </Head>
        <>
          <Header as="h3" style={{ paddingTop: 10 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 10 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
    </div>
  );
};

export default Home;
