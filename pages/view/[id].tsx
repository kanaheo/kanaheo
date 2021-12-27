import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ConstmeticItem from "../../src/component/CosmeticItem";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem]: any = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (id && id !== undefined) {
      getData();
    }
  }, [id]); // id를 쓸 수 있게 바로 useEffect 안에서 !

  return <ConstmeticItem item={item} />;
};

export default Post;
