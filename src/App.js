import React, {Component} from 'react';
import './App.css';
import DenseAppBar from './components/DenseAppBar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <DenseAppBar/>
            </div>
        );
    }
}

export default App;
