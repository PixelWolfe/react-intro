import React, {Component} from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

class Header extends Component{

    render(){
        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography>Adventures and Memories</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;