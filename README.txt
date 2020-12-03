In my project, I made an online bookstore with book items and a shopping cart. Each book item has a name, print type (paperback, hardcover, ebook), genre (fiction, non-fiction, play), price, and image. The filters I implemented were filtering by print type and genre, and my sort feature sorts the book items with price from low to high or high to low. 


Organization of components
My general class component organizational structure consists of:
1. App.jsx: Contains the list of book items, my methods for adding and removing from cart, and a render function that displays the application. The render function calls on FilteredList and DisplayCart.

2. FilteredList.jsx: Contains the methods for filtering the print type and genre, as well as sorting. Its render function displays 3 bootstrap navbars that show the filters and the sort function, and calls on DisplayList to display the list of items. 

3. DisplayList.jsx: Contains the methods for displaying the list of book items in the browsing section, and creates a div for each book item. It returns a flex box for displaying all of the book items in the render function.

4. DisplayCart.jsx: Contains the methods for displaying the list of book items in the aggregator section. I made a separate display function for this because I changed the button to remove instead of add, and I modified the flex specifications to make it better fit the aggregator display. 


How data is passed down through components
In regards to how data is passed down through components, I create the productList, which is the list of book items, in App. This productList is passed into FilteredList, which filters these items based on the selected print type or genre filters, and sorts the items if a sorting function is selected. This filtered and sorted list is then passed into DisplayList, where it displays the list of book items specified from the filters and sort in the browsing section of the page. If the "Add to Cart" button is selected for a book item, the addCart method from App (which has been passed as a parameter through FilteredList to DisplayList) will be called onClick. This method modifies the cart to include the item clicked and adds the price of the item to the cart's total, then sets the state for both the cart and the total. The items in the cart are displayed through the class DisplayCart, which is also in the render function of App. DisplayCart takes in the cart as a parameter and will display the items in the cart to the right of the browsing section. Each item in the cart also has a remove button instead of an add to cart button, and if it is clicked on, it will call the removeCart method from App (removeCart is also passed to DisplayCart as a parameter). In the removeCart method, the cart is filtered for items that aren't the item that was clicked, the total is adjusted accordingly, and the states for cart and total are set again. 


How the user trigger state changes
For the filtering and sorting functions, the state changes are triggered in FilteredList. The constructor creates a base state for printtype, genre, and sort. Each feature on the navbars is assigned to a state (for example, genre has the states "All", "Fiction", "Non-Fiction", or "Play"), and on the user selecting one of the features in the navbar, the state of that property is changed to reflect the selected property. The list of items is then filtered using a method that determines whether each item's properties match with the current state's properties. Similarly, the state on sort is also modified by the user clicking on the navbar, and the method toSort applies the sorting on the list accordingly to the selected sort function. 

For the addCart and removeCart functions, the state changes for the cart and the total are in App and is triggered in DisplayList (for add) or DisplayCart (for remove). For both of these functions, the state changes are triggered by the user clicking on the "Add to Cart" or "Remove" button for a book item, which calls on the addCart and removeCart functions in App. These functions either add or remove the clicked item from the current state to the cart and calculates the total accordingly, then sets the state for both of cart and total. 
