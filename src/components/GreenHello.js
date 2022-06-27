import "./GreenHello.css"

function GreenHello(props) {
    let afterMessage = ""
    if(props.age > 18) {
        afterMessage = "You are an adult"
    } else {
        afterMessage = "You are still a child"
    }
    return (
        <h1 class="GreenHello">Ahoj, {props.name} {props.surname} : {afterMessage}</h1>
    )
}

export default GreenHello