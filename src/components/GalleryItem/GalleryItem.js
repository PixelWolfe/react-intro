import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ReactCardFlip from 'react-card-flip';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


class GalleryItem extends Component{

    state = {
        isFlipped: this.props.isFlipped
    }

    toggleDetails=()=>{
        this.setState({
            isFlipped: !this.state.isFlipped
        })
        console.log(this.props.id);
        this.props.updateFlip(this.props.id);
    }

    toggleLikes=()=>{
        console.log('Like button pressed!');
        console.log(this.props.id);
        this.props.updateLikes(this.props.id);
    }

    render(){
        const imgStyles = {
            backgroundImage: `url(${this.props.src})`,
            backgroundSize: "cover",
            color: "white",
            minHeight: "200px",
            paddingLeft: "15px",
            paddingRight: "15px",
            cursor: "pointer"
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
            paddingRight: "15px",
            cursor: "pointer"
        };
        const cardStyle = {
            backgroundColor: "rgb(133, 158, 184)"
        };
        const spanStyle = {
            fontSize: "12px"
        };
        const pointerStyle ={
            cursor: "pointer"
        }
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
                        <IconButton style={pointerStyle} onClick={this.toggleLikes}>
                        <FavoriteIcon />
                        </IconButton>
                        You Like This.
                    </span>
                    :
                    <IconButton style={pointerStyle} onClick={this.toggleLikes}>
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
                    <IconButton style={pointerStyle} onClick={this.toggleLikes}>
                    <FavoriteIcon />
                    </IconButton>
                    Likes: {this.props.likes}
                </span>
                :
                <span style={spanStyle}>
                    <IconButton style={pointerStyle} onClick={this.toggleLikes}>
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