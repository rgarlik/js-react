import { useState } from 'react'

function ShoppingList() {

    let [shoppingList, setShoppingList] = useState("")
    let [itemToBeAdded, setItemToBeAdded] = useState("")

    function onButtonClicked() {
        if(shoppingList != "") {
            setShoppingList(shoppingList + ", " + itemToBeAdded)
        } else {
            setShoppingList(itemToBeAdded)
        }
        
    }

    function onInputChanged(event) {
        setItemToBeAdded(event.target.value)
    }

    return(
        <div>
            <input onChange={onInputChanged} type="text" />
            <button onClick={onButtonClicked}>Add to shopping list</button>
            <div>{shoppingList}</div>
        </div>
    )
}

export default ShoppingList