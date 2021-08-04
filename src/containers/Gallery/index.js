import React from 'react';
import GALLERY_QUERY from "../../queries/gallery/gallery.js";
import Query from "../../components/Query";
import { useParams } from "react-router";

const Gallery = () => {
    let { id } = useParams();
    return (
        <div>
            <div className="content">
            <Query query={GALLERY_QUERY} slug={id}>
                {({ data: { galleries } }) => { 
                    return (
                        <div>
                            <h1>{galleries[0].name}</h1>
                        </div>
                    )
                }}
            </Query>
            </div>
        </div>
    )
}

export default Gallery;