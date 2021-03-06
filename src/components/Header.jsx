import React from 'react';
import { connect } from "react-redux";
import { deleteAll } from '../redux/itemActions';
import { IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';


const Header = ({ deleteAll }) => {

    return(
        <div className="header">
            <h3> Grocery List </h3>
            <IconButton onClick={deleteAll}>
                <DeleteForever fontSize="large"/>
            </IconButton>
        </div>
    )
}



export default connect(
    null,
    { deleteAll }
)(Header);