import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

class GalleryItem extends Component{
    render(){
        const myStyle = {
            backgroundImage: `url(${this.props.src})`,
            backgroundSize: "cover",
            color: "white",
            minHeight: "200px"
          };
        return(
        <Card variant="outlined">
            <CardContent style={myStyle}>
                <div>
                
                </div>
                <Typography variant="body1" component="p">
                {this.props.description}
                </Typography>
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