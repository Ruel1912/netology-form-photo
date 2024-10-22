import { useState } from 'react'
import PhotoAddButton from './photoAddButton'
import PhotoList from './photoList'

const PhotoManager = () => {
  const [photos, setPhotos] = useState<File[]>([])

  const addPhoto = (newPhotos: File[]) => setPhotos([...photos, ...newPhotos])

  const deletePhoto = (photo: File) =>
    setPhotos(photos.filter((item) => item.lastModified !== photo.lastModified))

  return (
    <div className="flex flex-col gap-12 w-full p-8">
      <PhotoAddButton addPhoto={addPhoto} />
      <PhotoList items={photos} deletePhoto={deletePhoto} />
    </div>
  )
}

export default PhotoManager
