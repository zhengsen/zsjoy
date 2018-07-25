import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './Header';
import MainMenuDrawer from './MainMenuDrawer'

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    render() {
        return (
            <div>
                <CssBaseline/>
                <Header open={this.state.open} onMenuClick={() => this.setState({open: true})}/>
                <MainMenuDrawer
                    open={this.state.open}
                    onClose={() => {
                        this.setState({open: false});
                    }}/>
            </div>
        );
    }
}

export default HomePage