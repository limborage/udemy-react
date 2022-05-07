import {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            data: []
        };
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(
                () => {
                    return {monsters: users, data: users}
                },
                () => {
                    console.log(this.state)
                }))
        ;
    }

    render() {
        console.log('render');
        return (
            <div className="App">
                <input className={'search-box'}
                       type={'search'}
                       placeholder={'Search for Monster(s)'}
                       onChange={(event) => {
                           console.log(event.target.value);
                           this.setState(() => {
                               let data = this.state.monsters.filter((monster) => {
                                   return monster.name.includes(event.target.value);
                               });

                               return {data}
                           });
                           console.log()
                       }}
                />
                {
                    this.state.data.map((monster) => {
                        return <div key={monster.id}><h1>{monster.name}</h1></div>;
                    })
                }
            </div>
        );
    }
}

export default App;
