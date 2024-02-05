function printHello(){
    alert("Hello!");
}

function printBye(){
    alert("bye!");
}

function handleHover(){
    alert("hover");
}

function handleDoubleClick(){
    alert("You double clicked");
}

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}>this para is for event demo</p>
            <button onMouseOver={handleHover}>Hover over me!</button>
            <button onDoubleClick={handleDoubleClick}>Double click me!</button>
        </div>
    );
}