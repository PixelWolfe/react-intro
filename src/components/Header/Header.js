import React, {Component} from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

class Header extends Component{

    render(){
        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography>This is the Header</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;