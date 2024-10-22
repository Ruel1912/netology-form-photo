import React, { useRef } from 'react'

interface PhotoAddButtonProps {
  addPhoto: (photo: File[]) => void
}

const PhotoAddButton: React.FC<PhotoAddButtonProps> = ({ addPhoto }) => {
  
  const filesRef = useRef<HTMLInputElement>(null);

  const handleChange = async () => {

    if (!filesRef.current || !filesRef.current.files) return;

    const newFiles = Array.from(filesRef.current.files);
    addPhoto(newFiles);
  }

  return (
    <label className="btn btn-lg min-h-20" htmlFor="photo-files">
      <span className='text-xl'>Загрузить фото</span>
      <input
        type="file"
        className="hidden"
        id="photo-files"
        multiple
        accept="image/*"
        ref={filesRef}
        onChange={handleChange}
      />
    </label>
  )
}

export default PhotoAddButton
