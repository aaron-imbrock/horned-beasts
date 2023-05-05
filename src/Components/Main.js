import { Component } from "react";
import HornedBeast from './Hornedbeast';
import data from '../Assets/data.json';

class Main extends Component {
    render() {
        return (
            <>
                {data.map((item,idx) => 
                <HornedBeast key={idx} title={item.title} image_url={item.image_url} description={item.description} />
                )}
            </>
        )
    };
}

export default Main;