import React, { useState } from 'react'

const images = [
  "https://images.unsplash.com/photo-1562572159-4efc207f5aff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww",
  "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?cs=srgb&dl=pexels-alipazani-2836486.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JIU-jVG3uk8QSk2Sk9jHBzIc9yrCkDrxY5oS4dNz1PaZWQoFHinwi8icZafksdHAb-s&usqp=CAU"
]

const ImageGallery = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className='w-full h-[100vh]'>
      <div className='border border-black w-[70%] m-auto p-6'>
        <h1 className='text-center font-bold text-4xl mb-2'>Image Gallery</h1>
        <p className='text-center mt-2 text-lg'>Click on an image to view it larger.</p>
        <div className='flex flex-wrap gap-4 justify-center mt-4'>
          {images.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Image ${idx}`}
              onClick={() => setSelected(url)}
              className='w-32 h-32 object-cover cursor-pointer border rounded hover:scale-105 transition-transform'
            />
          ))}
        </div>

        {selected && (
          <div className='mt-6 text-center'>
            <h2 className='text-xl font-semibold mb-2'>Selected Image</h2>
            <img
              src={selected}
              alt="Selected"
              className='mx-auto max-w-full max-h-[500px] rounded shadow-lg'
            />
            <button
              onClick={() => setSelected(null)}
              className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageGallery
