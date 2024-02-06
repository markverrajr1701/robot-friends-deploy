import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
    // const state = { robots: robots, searchfield: "" };

    constructor() {
        super();
        this.state = { robots: robots, searchfield: "" };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        console.log(event.target.value);
    };

    render() {
            const filteredRobots = this.state.robots.filter(robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }
        );
        return (

        <div className="tc">
            <h1>RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={ this.state.robots } />;
        </div>
        );
    };
};

export default App;
