import React from 'react';
import '../style/main.css';


class TableAll extends React.Component {
    render() {
        const listAll = [];
        let categoryLast = null;

        const search = this.props.search;
        const checkBox = this.props.checkBox;

        this.props.products.forEach(product => {
            if (product.name.indexOf(search) === -1) {
                return;
            }
            if (checkBox && !product.stocked) {
                return;
            }
            if (product.category !== categoryLast) {
                listAll.push(
                    <NameCategory
                        category={product.category}
                        key={product.category} />
                );
            }
            listAll.push(
                <NameItem
                    name={product.name}
                    price={product.price}
                    stocked={product.stocked} />
            );
            categoryLast = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{listAll}</tbody>
            </table>
        )
    }
}

class NameCategory extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr className="category">
                <td>
                    {category}
                </td>
                <td></td>
            </tr>
        )
    }

}

class NameItem extends React.Component {
    render() {
        const stocked = this.props.stocked;
        const name = this.props.name;
        const price = this.props.price;

        const nameItem = stocked ? name :
            <span style={{ color: 'red' }}>
                {name}
            </span>;

        return (
            <tr>
                <td>
                    {nameItem}
                </td>
                <td>
                    {price}
                </td>
            </tr>
        );
    }
}

export default TableAll;