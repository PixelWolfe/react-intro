import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FormHelperText } from '@material-ui/core';


// <CardContent style={imgStyles}>
// <Typography variant="body1" component="p">
// {this.props.description}
// </Typography>
// </CardContent>

class GalleryItem extends Component{

    state = {
        details: false
    }

    toggleDetails=()=>{
        this.setState({
            details: !this.state.details
        })
    }

    render(){
        const imgStyles = {
            backgroundImage: `url(${this.props.src})`,
            backgroundSize: "cover",
            color: "white",
            minHeight: "200px",
            paddingLeft: "15px",
            paddingRight: "15px"
          };
        const descriptionStyles = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow",
            minHeight: "200px",
            color: "black",
            fontFamily: "Arial",
            paddingLeft: "15px",
            paddingRight: "15px"
        };
        const cardStyle = {
            backgroundColor: "rgb(133, 158, 184)"
        };
        return(
        <Card variant="outlined" style={cardStyle}>


                <CardContent onClick={this.toggleDetails}>
                {
                    this.state.details ? 
                        <div style={descriptionStyles}>
                          {this.props.description}
                        </div> :
                        <div style={imgStyles}>
                        </div>
                }
                </CardContent>
           





            <CardActions>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
        )
    }
}


export default GalleryItem