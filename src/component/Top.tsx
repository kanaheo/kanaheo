import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import Styles from "./Top.module.scss";

const Top = () => {
  return (
    <>
      <div className={Styles.top_main}>
        <div className={Styles.top_logo}>
          <Header as="h1">경민카나</Header>
        </div>
      </div>
      <Gnb />
    </>
  );
};

export default Top;
