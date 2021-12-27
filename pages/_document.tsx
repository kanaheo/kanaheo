import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/*
    여기는 서버에서 랜더링 된다.
    무슨 여기서 온클릭이라던가 , app에 있는 head랑은 전혀 무관 !!! 여기다 title 태그같은거 안된다 ! 
*/
