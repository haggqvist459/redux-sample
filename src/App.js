import React, { Component } from 'react';
import AddItem from './components/AddItem';
import GroceryList from './components/ItemList';
import VisibilityFilters from './components/VisibilityFilters';
import Header from './components/Header';

import { Provider } from "react-redux";
import store from './redux/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <VisibilityFilters />
                <div className="grocery-list-container">
                    <GroceryList />
                    <AddItem />
                </div>
            </Provider>
        )
    }
}

export default App;
