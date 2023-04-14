import {Photo, CommonClassProps } from "../types";
import style from './index.module.scss'
import cl from 'classnames'

interface MainPhotoProps extends CommonClassProps {
    prevPhoto?: Photo;
    activePhoto: Photo;
    nextPhoto?: Photo;
}
export const MainPhoto: React.FC<MainPhotoProps> = ({
    prevPhoto,
    activePhoto,
    nextPhoto,
    className,
}) => (
   <div className={cl(className, style.MainPhoto)}>
        {prevPhoto && (
            <img className={style.MainPhoto__ImagePrev} src={prevPhoto.src} alt={prevPhoto.description} />
        )}

        <img className={style.MainPhoto__Image} src={activePhoto.src} alt={activePhoto.description} />

        {nextPhoto && (
            <img className={style.MainPhoto__ImageNext} src={nextPhoto.src} alt={nextPhoto.description} />
        )}
   </div> 
);