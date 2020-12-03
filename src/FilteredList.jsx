import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayList from "./DisplayList.jsx"

/**
 * class FilteredList: contains the methods for filtering and sorting 
 */
class FilteredList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            printtype: "All",
            genre: "All",
            sort: "None"
        };
    }

    /**
     * method for setting the state of printtype
     */
    onSelectFilterType = event => {
        this.setState({
            printtype: event
        })
    };

    /**
     * method for setting the state of genre
     */
    onSelectFilterGenre = event => {
        this.setState({
            genre: event
        })
    };

    /**
     * method for setting the state of sort
     */
    onSelectFilterSort = event => {
        this.setState({
            sort: event
        })
    };

    /**
     * method that matches each item's genre or printtype to the state's genre or printtype. 
     * this is used for the filter. 
     */
    matchesFilter = item => {
        // all items should be shown when no filter is selected
        if (this.state.printtype === "All" && this.state.genre === "All") {
            return true
        } else if (this.state.printtype === item.printtype && this.state.genre === "All") {
            return true
        } else if (this.state.genre === item.genre && this.state.printtype === "All") {
            return true
        } else if (this.state.genre === item.genre && this.state.printtype === item.printtype) {
            return true
        } else {
            return false
        }
    }

    /**
     * method to sort the items based on price
     */
    toSort = list => {
        if(this.state.sort === "Low to High"){
            return list.sort((item1, item2) => item1.price - item2.price)
        } else if(this.state.sort === "High to Low"){
            return list.sort((item1, item2) => item1.price - item2.price).reverse()
        } else{
            return list.sort((item1, item2) => 0)
        }
    }


    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    Print Type:
                    <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Hardcover" onSelect={this.onSelectFilterType}>Hardcover</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Paperback" onSelect={this.onSelectFilterType}>Paperback</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="EBook" onSelect={this.onSelectFilterType}>EBook</Nav.Link></Nav.Item>
                </Navbar>
                <Navbar bg="light" expand="lg">
                    Genre:
                    <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterGenre}>All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Fiction" onSelect={this.onSelectFilterGenre}>Fiction</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Non-Fiction" onSelect={this.onSelectFilterGenre}>Non-Fiction</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Play" onSelect={this.onSelectFilterGenre}>Play</Nav.Link></Nav.Item>
                </Navbar>
                <Navbar bg="light" expand="lg">
                    Sort Price
                    <Nav.Item><Nav.Link eventKey="None" onSelect={this.onSelectFilterSort}>None</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Low to High" onSelect={this.onSelectFilterSort}>Low to High</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="High to Low" onSelect={this.onSelectFilterSort}>High to Low</Nav.Link></Nav.Item>
                </Navbar>
                <DisplayList list={this.toSort(this.props.list.filter(this.matchesFilter))}  addCart={this.props.addCart}/>
            </div>
        )
    }

}


export default FilteredList;