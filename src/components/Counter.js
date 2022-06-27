import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function onButtonClicked() {
        setCount(count + 1);
    }

    return(
        <div>
            <p>You clicked the button {count} times</p>
            <button onClick={onButtonClicked}>Click Me</button>
        </div>
    )
}

export default Counter;