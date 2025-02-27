import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.imageRef = React.createRef();

        this.state = {
            spans: 0
        };
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 150);

        this.setState({ spans })
    }

    render(){
        const {alt_description, urls} =  this.props.image;

        return(
            <div class="image-list__image-container" style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    src={urls.regular} 
                    alt={alt_description} />
            </div>
        );
    }
}

export default ImageCard;