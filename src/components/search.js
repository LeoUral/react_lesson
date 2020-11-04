import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChange(e) {
        this.props.onSearch(e.target.value);
    }
    handleChecked(event) {
        this.props.onCheckedBox(event.target.checked);
    }

    render() {
        const search = this.props.search;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={this.handleChange} />
                <p>
                    <input
                        type="checkbox"
                        onChange={this.handleChecked}
                        checked={this.props.checkBox}
                    />
                    {' '}
                Only show products in stock
                </p>
            </form>
        )
    }
}

export default SearchBar;