import './App.css'
import ShoppingCart from './lib/shopping_cart/ShoppingCart'
import Resume from './lib/resume/Resume'

function App() {
  return (
    <div className="container row">
      <div className="col-8"><ShoppingCart></ShoppingCart></div>
      <div className="col-4 card resume-component"><Resume></Resume></div>
    </div> 
  )
}

export default App
