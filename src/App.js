import { useState, useEffect } from "react"
// Importing Alan-ai
import alanBtn from '@alan-ai/alan-sdk-web';

// menuItems JSON Data
const menuItems = [
  {name: "Angus Burger", price: 8.99, category: 'burger'},
  {name: "Tuna Steak Burger", price: 15.00, category: 'burger'},
  {name: "Bacon Burger", price: 11.50, category: 'burger'},
  {name: "Southwest Chicken Burger", price: 9.99, category: 'burger'},
  {name: "Mozzarella Burger", price: 12.50, category: 'burger'},
  {name: "Cesar Salad", price: 6.50, category: 'salad'},
  {name: "BBQ Chicken Salad", price: 13.99, category: 'salad'},
  {name: "Garden Salad", price: 9.99, category: 'salad'},
  {name: "Veggie Lasagna", price: 17.99, category: 'pasta'},
  {name: "Spaghetti & Meatballs", price: 17.99, category: 'pasta'},
  {name: "Fettuccine Alfredo", price: 17.99, category: 'pasta'},
];

function App() {
  // Setting a piece of state for the 'cart'
  const [cart, setCart] = useState([])

  useEffect(() => {
    // Alan-ai button to call
    alanBtn({ 
      key: '9298c5e0f50206b31f16ca738b3fb5a62e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
      },
    });
  }, [])
  // Function to add items to the cart
  const addToCart = (menuItem) => {
    setCart((oldCart) => {
      // Return all the items from 'oldCart' + menuItems
      // Spread operator: '...'
      return [...oldCart, menuItem]
    })
  }

  return <div className="App">
  {/* Map over this menuItems */}
  {menuItems.map((menuItem) => (
    // key will be the 'name'
    // This is the menu items that the user will see
    <li key={menuItem.name}>
      {menuItem.name} - ${menuItem.price} - {menuItem.category}
      {/* Button to add menu items to the cart */}
    <button onClick={() => addToCart(menuItem)}>Add to Cart</button>
    </li>
  ))}
  <h2>Cart</h2>
  {/* Mapping through 'cart items' */}
  {cart.map((cartItem) => (
    // This will the 'cart item' user will see
    <li key={cartItem.name}>
      {cartItem.name} - ${cartItem.price} - {cartItem.category}
    </li>
  ))}
  </div>
}

export default App;
