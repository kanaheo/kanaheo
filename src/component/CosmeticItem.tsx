import { Button, Header } from "semantic-ui-react";
import { cosmeticTypes } from "../store/cosmeticTypes";
import Styles from "./CosmeticItem.module.scss";

interface itemListProps {
  item: cosmeticTypes;
}

const Item = ({ item }: itemListProps) => {
  const { image_link, name, price, description, product_type, category } = item;
  return (
    <>
      <div className={Styles.wrap}>
        <div className={Styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={Styles.info_item}>
          <strong className={Styles.tit_item}>{name}</strong>
          <strong className={Styles.num_price}>${price}</strong>
          <span className={Styles.txt_info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
};

export default Item;
