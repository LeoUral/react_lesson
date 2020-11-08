import React from 'react';
import { createStore } from 'redux';
import TableAll from '../components/main';
import PRODUCTS from '../components/products';
import SearchBar from '../components/search';
import reducer from '../reducers';
import ReduxComponent from '../components/redux_comp';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '', checkBox: false };
        let storeRedux = this.state.search;

        const initialState = { tech: { storeRedux } };
        const store = createStore(reducer, initialState);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
    }

    handleSearch(search) {
        this.setState({ search });
    }
    handleChangeCheck(checkBox) {
        this.setState({ checkBox });
    }

    render() {
        return (
            <div>
                <SearchBar
                    onSearch={this.handleSearch}
                    onCheckedBox={this.handleChangeCheck}
                />
                <TableAll
                    products={PRODUCTS}
                    search={this.state.search}
                    checkBox={this.state.checkBox}
                />
                <ReduxComponent
                    tech={store.getState().tech}
                />
            </div>
        )
    }
}

export default Box;