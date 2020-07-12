import React, {Component} from 'react';

class Gallery extends Component{



    render(){
        return(
            <>
                <p>Adventure and Memories.</p>
                {
                    this.props.images.map((image)=>
                    <img src={image.path}/>
                    )
                }
                {JSON.stringify(this.props.images)}
            </>
        )
    }
}

export default Gallery;