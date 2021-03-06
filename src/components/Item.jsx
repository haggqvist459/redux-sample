import React from "react";
import { connect } from "react-redux";
import { toggleItem, deleteItem } from "../redux/itemActions";
import { CheckCircle, CheckCircleOutline } from '@material-ui/icons';
import { Delete, DeleteOutline } from '@material-ui/icons';


const Item = ({ item, toggleItem, deleteItem }) => (
    <li className="shopping-list__item">
        <div className="shopping-list__item__toggle" onClick={() => toggleItem(item.id)}>
            {item && item.picked ? <CheckCircle /> : <CheckCircleOutline />}{" "}
            <span
                className={`shopping-list__item__text ${item.picked ? "shopping-list__item__text--picked" : ""}`}
            >
                {item.content}
            </span>
        </div>
        <div className="shopping-list__item__delete" onClick={() => deleteItem(item)}>
            {item && item.picked ? <Delete /> : <DeleteOutline />}{" "}
        </div>
    </li>
);


export default connect(
    null,
    { toggleItem, deleteItem }
)(Item);
