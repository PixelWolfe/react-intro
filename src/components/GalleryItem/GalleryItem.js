import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ReactCardFlip from 'react-card-flip';

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
        details: false,
        isFlipped: false
    }

    toggleDetails=()=>{
        this.setState({
            details: !this.state.details,
            isFlipped: !this.state.isFlipped
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
            backgroundColor: "rgb(178, 197, 218)",
            minHeight: "200px",
            color: "black",
            fontFamily: "Arial",
            paddingLeft: "15px",
            paddingRight: "15px"
        };
        const cardStyle = {
            backgroundColor: "rgb(133, 158, 184)"
        };
        const spanStyle = {
            fontSize: "12px"
        };
        return(

            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

        <Card style={cardStyle}>
            <CardContent>
                <div style={imgStyles} onClick={this.toggleDetails}>
                </div>
            </CardContent>
            <CardActions>
                {
                    (this.props.userLiked)?
                    <span style={spanStyle}>
                        <IconButton>
                        <FavoriteIcon />
                        </IconButton>
                        You Liked This.
                    </span>
                    :
                    <IconButton>
                    <FavoriteBorderIcon />
                    </IconButton>
                }
            </CardActions>
        </Card>

        <Card style={cardStyle}>
            <CardContent>
                <div style={descriptionStyles} onClick={this.toggleDetails}>
                {this.props.description}
                </div> 
            </CardContent>
            <CardActions>
            {
                (this.props.userLiked)?
                <span style={spanStyle}>
                    <IconButton>
                    <FavoriteIcon />
                    </IconButton>
                    Likes: {this.props.likes}
                </span>
                :
                <span style={spanStyle}>
                <IconButton>
                <FavoriteBorderIcon />
                </IconButton>
                Likes: {this.props.likes}
                </span>
            }
            </CardActions>
        </Card>

        </ReactCardFlip>
        )
    }
}


export default GalleryItem