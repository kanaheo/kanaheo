import Link from "next/link";
import { Grid } from "semantic-ui-react";
import { cosmeticTypes } from "../store/cosmeticTypes";
import Styles from "./ItemList.module.scss";

interface itemListProps {
  list: cosmeticTypes[];
}

const ItemList = ({ list }: itemListProps) => {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column>
              <Link href={`/view/${item.id}`}>
                <a>
                  <div className={Styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={Styles.img_item}
                    />
                    <strong className={Styles.tit_item}>{item.name}</strong>
                    <span className={Styles.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={Styles.num_price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
