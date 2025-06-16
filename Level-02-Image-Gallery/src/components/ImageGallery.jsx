import { useState } from 'react';
import Modal from './Modal';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww',
      alt: 'Model Image 1'
    },
    {
      id: 2,
      url: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTgwODY5MjM3ODM2MTYyMTM2/pakistans-15-most-popular-female-fashion-models.jpg',
      alt: 'Model Image 2'
    },
    {
      id: 3,
      url: 'https://media.istockphoto.com/id/2148131893/photo/beauty-image-of-a-young-korean-woman-photographed-against-a-background-of-light-and-shadow.jpg?s=612x612&w=0&k=20&c=gimHwYKm5f5VO7gZYuRd2Q47Zrg7akUah0mLtn97ijo=',
      alt: 'Model Image 3'
    },
    {
      id: 4,
      url: 'https://img.freepik.com/free-photo/full-shot-woman-posing-with-red-background_23-2149480766.jpg?semt=ais_hybrid&w=740',
      alt: 'Model Image 4'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww',
      alt: 'Model Image 5'
    },
    {
      id: 6,
      url: 'https://i.pinimg.com/474x/3b/6f/f4/3b6ff4604d11d9332ed07af09526c286.jpg',
      alt: 'Model Image 6'
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>
      <p className='text-lg mb-8 text-center font-semibold'>Click The Image To View It Larger</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-[0.5]"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ImageGallery; 