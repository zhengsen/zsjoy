import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button variant='raised' color='primary'>
                    hi
                </Button>
            </div>
        );
    }
}

export default App;
