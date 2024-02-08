import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends React.Component {


    constructor() {
        super();
        this.state = { robots: robots, searchfield: "" };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        console.log(event.target.value);
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            
            })
            .then((users) => {
                console.log({ users }); 
                this.setState({ robots: users });
            });
    }

    render() {
            const filteredRobots = this.state.robots.filter(robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }
        );
        return (

        <div className="tc">
            <h1 className="f1">RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={ filteredRobots } />;
            </Scroll>
        </div>
        );
    };
};

export default App;
