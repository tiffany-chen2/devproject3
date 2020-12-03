import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

import {
    Button
} from '@material-ui/core'

/**
 * class DisplayCart: displays the book items in the aggregator section
 */
class DisplayCart extends React.Component {

    /*
    method to create a div to display each book item
    */
    createTask = item => {
        return (
            <div class="flex-container-col3">
                <div class="center"><h6>Name: {item.name}</h6></div>
                <div>Print Type: {item.printtype}</div>
                <div>Genre: {item.genre}</div>
                <div>Price: ${item.price}</div>
                <div><img src={item.image} height="200" width="130" /></div>
                <Button variant="contained" onClick={() => this.props.removeCart(item)}>Remove</Button>
            </div >
        )
    }

    /*
    method to display the list of items with a flexbox
    */
    render() {
        const entries = this.props.list;
        const listItems = entries.map(this.createTask)
        return (
            <div class="flex-container-col">{listItems}</div>
        )
    }
}

export default DisplayCart;