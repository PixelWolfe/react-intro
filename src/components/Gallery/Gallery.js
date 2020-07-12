import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import { Grid } from '@material-ui/core';

class Gallery extends Component{



    render(){
        return(
            <>
                <Grid container spacing={4}>
                    {
                        this.props.images.map(image=>
                            <Grid item xs={12} sm={6} md={4} key={image.id}>
                                <GalleryItem src={image.path} description={image.description} userLiked={image.userLiked} likes={image.likes}/>
                            </Grid>
                        )
                    }
                </Grid>
              
            </>
        )
    }
}

export default Gallery;