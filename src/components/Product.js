import './Product.css';

function Product(props) {

    if(props.sale == "true") {
        // verzia so zlavou
        return(
            <div class="product-div">
                <h1>{props.name}</h1>
                <p>
                    {props.description}
                </p>
                <div class="sale">Zlava {props.saleValue}!</div>
            </div>
        )
    } else {
        // verzia bez zlavy
        return(
            <div class="product-div">
                <h1>{props.name}</h1>
                <p>
                    {props.description}
                </p>
            </div>
        )
    }
}

export default Product;