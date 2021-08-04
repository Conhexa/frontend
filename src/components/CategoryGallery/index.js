import React from "react";

import { Link } from 'react-router-dom';

import '../../assets/style/styleCategorieGallery.css';

const Gallery = ({ galleries }) => {
  const gridGallery = galleries.slice(0, galleries.length);
  return (
        <div className="content">
            <div className="categorieGallery">
                {gridGallery.reverse().map((gallery, i) => {
                    return (
                        <div className="fieldGallery">
                            <Link to={`/gallery/${gallery.slug}`} className="link">
                                <img
                                    src={"http://localhost:1337"+gallery.photo[0].url}
                                    alt={"http://localhost:1337"+gallery.photo[0].url}
                                    height="100"
                                    className="imgGallery"
                                />
                                <h2 className="nameGallery">{gallery.name}</h2>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
  );
};
export default Gallery;