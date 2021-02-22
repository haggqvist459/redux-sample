import React from "react";
import { connect } from "react-redux";
import { toggleItem } from "../redux/itemActions";
import { CheckCircle, CheckCircleOutline } from '@material-ui/icons';


const Item = ({ item, toggleItem }) => (
    <li className="shopping-list__item" onClick={() => toggleItem(item.id)}>
        {item && item.picked ? <CheckCircle /> : <CheckCircleOutline />}{" "}
        <span
            className={`shopping-list__item__text ${item.picked ? "shopping-list__item__text--picked" : ""}`}
        >
            {item.content}
        </span>
    </li>
);


export default connect(
    null,
    { toggleItem }
)(Item);
