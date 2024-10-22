import React from 'react'

interface PhotoListItemProps {
  item: File
  deletePhoto: (photo: File) => void
}

const PhotoListItem: React.FC<PhotoListItemProps> = ({ item, deletePhoto }) => {
  return (
    <div className="relative">
      <img
        className="w-60 h-60 object-cover object-center shadow-lg"
        src={URL.createObjectURL(item)}
        alt={item.name}
      />
      <div className="absolute top-0 right-0 z-10 translate-x-1/2 -translate-y-1/2">
        <button className="btn btn-circle" onClick={() => deletePhoto(item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PhotoListItem
