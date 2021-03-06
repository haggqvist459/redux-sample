import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { getItemsByVisibilityFilter } from "../redux/selectors";


const ItemList = ({ items }) => (
  <ul className="shopping-list">
    {items && items.length
      ? items.map((item) => {
          return <Item key={`item-${item.id}`} item={item} />;
        })
      : ""}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const items = getItemsByVisibilityFilter(state, visibilityFilter);
  return { items };
};

export default connect(mapStateToProps)(ItemList);
