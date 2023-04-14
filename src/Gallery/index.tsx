import { Photo } from "./types";
import style from './index.module.scss';
import { useState } from "react";
import { TransitionPhoto } from "./TransitionPhoto";
import { PreviewGallery } from "./PreviewGallery";
import { Naviganion } from "./Navigation";

interface GalleryProps {
    photos: Photo[];
}


export const Gallery: React.FC<GalleryProps> = ({
    photos,
}) => {
     if (!photos.length) {
        return null;
     }
     const [indexActivePhoto, setIndexActivePhoto] = useState(0);
     const activePhoto = photos[indexActivePhoto]
     const prevPhoto = photos[indexActivePhoto - 1]
     const nextPhoto = photos[indexActivePhoto + 1]



     return (
        <div className={style.webGallery}>
            <div className={style.webGallery__Container}>
                <TransitionPhoto
                    photos={photos}
                    indexActivePhoto={indexActivePhoto}
                />
                <Naviganion
                    className={style.webGallery__Navigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={()=>{
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={()=>{
                        setIndexActivePhoto(indexActivePhoto + 1);
                    }}
                />
            </div>  
            <PreviewGallery
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                className={style.webGallery__PreviewList}
                setNewPhoto={setIndexActivePhoto}
            />
        </div>
     );
}