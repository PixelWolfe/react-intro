import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import { Grid } from '@material-ui/core';

class Gallery extends Component{



    render(){
        return(
            <>
                <p>Adventure and Memories.</p>
                <Grid container spacing={4}>

                {JSON.stringify(this.props.images)}
                    {
                        this.props.images.map(image=>
                            <Grid item xs={12} sm={6} md={4} key={image.id}>
                                <GalleryItem src={image.path} description={image.description}/>
                            </Grid>
                        )
                    }
                </Grid>
              
            </>
        )
    }
}

export default Gallery;