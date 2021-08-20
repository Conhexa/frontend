import React from "react";
import CategorieGallery from "../../components/CategoryGallery";
import Query from "../../components/Query";
import CATEGORIES_GALLERY_QUERY from "../../queries/gallery/categorie.js";

const Gallery = () => {

    return (
        <div>
            <div className="content">
                <h1>Galerie photo</h1>
                <Query query={CATEGORIES_GALLERY_QUERY}>
                    {({ data: { galleries } }) => {
                    return <CategorieGallery galleries={galleries} />;
                    }}
                </Query>
            </div>
        </div>
    )
}

export default Gallery;