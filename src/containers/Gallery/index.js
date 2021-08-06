import React from 'react';
import GALLERY_QUERY from "../../queries/gallery/gallery.js";
import Query from "../../components/Query";
import { useParams } from "react-router";
import Zoom from 'react-medium-image-zoom';

import '../../assets/style/styleGallery.css';

const Gallery = () => {
    let { id } = useParams();
    return (
        <div>
            <div className="content">
            <Query query={GALLERY_QUERY} slug={id}>
                {({ data: { galleries } }) => {
                    /* console.log("-----------------5-") */
                    return(<div>
                        <h1>{galleries[0].name}</h1>
                    {galleries.map(picture => {
                        /* console.log(picture.photo.length) */
                        const allPicture = picture.photo.slice(0, picture.photo.length);
                        return (<div className="gridGallery">
                            {allPicture.map((photo, i) => {
                                /* console.log(photo.url) */
                                return (
                                    <div>
                                        <Zoom>
                                        <img
                                            src={"http://localhost:1337"+photo.url}
                                            alt={photo.name}
                                            className="photoGallery"
                                        />
                                        </Zoom>
                                    </div>
                                )
                            })}
                            </div>
                        )
                    
                    })}
                    </div>
                    )
                }}
            </Query>
            </div>
        </div>
    )
}

export default Gallery;