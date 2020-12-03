import React from 'react'
import ReactDOM from 'react-dom'

import FilteredList from "./FilteredList.jsx"
import DisplayCart from "./DisplayCart.jsx"


class App extends React.Component {

  /*
  constructor for the App class
  */
  constructor(props) {
    super(props)
    this.state = {
      /*
       productlist: list of book items with the properties name, printtype, genre, price, image
       cart: the shopping cart used to keep track of book items in the aggregator 
       total: total price in the shopping cart
       */
      productList: [
        {
          name: "Harry Potter & the Deathly Hallows", printtype: "Paperback", genre: "Fiction", price: 10,
          image: "https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg"
        },
        {
          name: "Romeo & Juliet", printtype: "Hardcover", genre: "Play", price: 20,
          image: "https://prodimage.images-bn.com/pimages/9781451621709_p0_v5_s1200x630.jpg"
        },
        {
          name: "Becoming", printtype: "EBook", genre: "Non-Fiction", price: 35,
          image: "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg"
        },
        {
          name: "Gone Girl", printtype: "Hardcover", genre: "Fiction", price: 10,
          image: "https://images-na.ssl-images-amazon.com/images/I/81g5ooiHAXL.jpg"
        },
        {
          name: "The Great Gatsby", printtype: "Paperback", genre: "Fiction", price: 15,
          image: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
        },
        {
          name: "Hamlet", printtype: "Paperback", genre: "Play", price: 10,
          image: "https://www.memoriapress.com/wp-content/uploads/2018/07/Hamlet-Student-Cover-Saddle.jpg"
        },
        {
          name: "The Odyssey", printtype: "EBook", genre: "Fiction", price: 18,
          image: "https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL._SX346_BO1,204,203,200_.jpg"
        },
        {
          name: "Madame Bovary", printtype: "Paperback", genre: "Fiction", price: 13,
          image: "https://almabooks.com/wp-content/uploads/2016/10/9781847493224.jpg"
        },
        {
          name: "A Brief History of Time", printtype: "Hardcover", genre: "Non-Fiction", price: 30,
          image: "https://i.pinimg.com/originals/0e/4a/3b/0e4a3b402a182777a4b3420efbf64be3.jpg"
        },
        {
          name: "Freakonomics", printtype: "Hardcover", genre: "Non-Fiction", price: 22,
          image: "https://images-na.ssl-images-amazon.com/images/I/51nyohMG0cL._AC_SY400_.jpg"
        },
        {
          name: "Macbeth", printtype: "EBook", genre: "Play", price: 10,
          image: "https://prodimage.images-bn.com/pimages/9780743477109_p0_v3_s1200x630.jpg"
        },
        {
          name: "The Chronicles of Narnia", printtype: "Paperback", genre: "Fiction", price: 12,
          image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1bgwAwdZYXoB3y0ra7FqNYyrJ4vNF-0MpNDt4s0cU4NaUlMzO"
        }
      ],
      cart: [],
      total: 0
    }
  }

  /*
  method to add items to the aggregated cart
  */
  addCart = item => {
    const cart = [...this.state.cart, item]
    const total = cart.reduce((total, item) => { return total + item.price }, 0)
    this.setState({ cart });
    this.setState({ total });
  };

  /*
  method to remove items from the aggregated cart
  */
  removeCart = item => {
    const cart = this.state.cart.filter(x => x !== item)
    const total = cart.reduce((total, item) => { return total + item.price }, 0)
    this.setState({ cart });
    this.setState({ total });
  };

  /*
  render function, calls on FilteredList and DisplayCart 
  */
  render() {
    return (
      <div class="flex-container-row">
        <div class="col-9">
          <h1>Bookstore</h1>
          <FilteredList list={this.state.productList} addCart={this.addCart} />
        </div>
        <div>
          <h1>Shopping Cart</h1>
          <h2>Total: ${this.state.total}</h2>
          <DisplayCart list={this.state.cart} removeCart={this.removeCart} />
        </div>
      </div>
    )
  }
}

export default App