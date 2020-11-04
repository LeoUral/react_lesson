import React from 'react';
import TableAll from '../components/main';
import PRODUCTS from '../components/products';
import SearchBar from '../components/search';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '', checkBox: false };

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
            </div>
        )
    }
}

export default Box;