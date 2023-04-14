import {Photo, CommonClassProps } from "../types";
import cl from 'classnames'
import style from './index.module.scss'
import { useEffect, useMemo, useRef } from "react";
interface PreviewGalleryProps extends CommonClassProps {
    activePhotoIndex: number;
    photos: Photo[];
}
export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
    activePhotoIndex,
    photos,
    className,
}) => { 
    if (!photos.length) {
        return null
    }
    const previewContainer = useRef<HTMLUListElement>(null)
    useEffect(()=>{
        if (!previewContainer.current) {
            return;
        }
        previewContainer.current.style.transform= `translate3d(-${activePhotoIndex * 164}px, 0, 0)`;
    }, [activePhotoIndex])
    return (
        <div className={cl(style.PreviewGallery, className)}>
            {useMemo(()=>(
                <ul>

                </ul>
            ),[])}
            <ul
                className={style.PreviewGallery__Track}
                ref={previewContainer}
            >
                {photos.map((photo) => (
                    <li
                        key={photo.id}
                        className={style.PreviewGallery__Preview}
                    >
                        <img src={photo.preview} alt={photo.description} className={style.PreviewGallery__Image}/>
                    </li>
                ))}
            </ul>
            <div
                className={style.PreviewGallery__Cover}
            >
                {activePhotoIndex+ 1} / {photos.length}
            </div>
        </div> 
    );
};