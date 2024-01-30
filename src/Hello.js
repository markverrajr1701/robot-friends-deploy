//import "./Hello.css";

function Hello({ greeting }) {
    return (
    <div>
        <h1 className="tc">Hello World!</h1>
        <h2>Welcome to CS331!</h2>
        <h3> {greeting} </h3>
    </div>);
}

export default Hello;