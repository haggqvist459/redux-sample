import React from 'react';
import { connect } from "react-redux";
import { deleteItems } from '../redux/itemActions';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Header = ({ deleteItems }) => {


    const handleDeleteItems = () => {
        console.log("bin icon pressed")
        deleteItems();   
    };
      
    return(
        <div className="header">
            <h3> Grocery List </h3>
            <IconButton onClick={handleDeleteItems}>
                <DeleteForeverIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}



export default connect(
    null,
    { deleteItems }
)(Header);