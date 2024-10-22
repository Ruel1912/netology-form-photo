import React from 'react'
import PhotoListItem from './photoListItem'

interface PhotoListProps {
  items: File[];
  deletePhoto: (photo: File) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ items, deletePhoto }) => {

  return (
    <ul className="flex gap-8 flex-wrap">
      {items.map((item) => (
        <PhotoListItem key={item.lastModified} item={item} deletePhoto={deletePhoto} />
      ))}
    </ul>
  )
}

export default PhotoList
