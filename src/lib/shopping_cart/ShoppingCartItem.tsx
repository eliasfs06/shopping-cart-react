import IncriseButton from "../buttons/IncriseButton";

export type Product = {
    name : string,
    description : string,
    price : number, 
    quantity : number,
    index : number,
    increaseQuantityFunction : (index : number) => void,
    decreaseQuantityFunction : (index : number) => void
}

function ShoppingCartItem(props : Product){
    const { name, description, price, quantity, index, increaseQuantityFunction, decreaseQuantityFunction} = props;

    const increaseQuantity = () => {
      increaseQuantityFunction(index); 
    };

    const decreaseQuantity = () => {
      decreaseQuantityFunction(index); 
    };

    return (
      <div>
        <hr></hr>      
        <div className="mt-2 row">
          <div className="col-2">
            <img className='food-img'src="src/assets/food-img.jpg" alt="Food " />
          </div>
          <div className="col-6">
            <h5 className="text-left"><b> { name }</b></h5>
            <h6 className="text-left">{ description }</h6>
            <h6 className="text-left">{ price.toLocaleString('pt-br', {style: 'currency', currency: 'USD'}) }</h6>
          </div>
          <div className="col-2">
            <IncriseButton quantity={ quantity } increaseQuantity={ increaseQuantity } decreaseQuantity={ decreaseQuantity }></IncriseButton>
          </div>
          <div className="col-2 row d-flex justify-content-center align-items-center">
            <h5 className="text-left">{ (price * quantity).toLocaleString('pt-br', {style: 'currency', currency: 'USD'}) }</h5>
          </div>
          
        </div>
      </div>
    );
}


export default ShoppingCartItem;
