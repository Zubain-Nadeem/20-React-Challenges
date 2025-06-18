const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-3xl w-full flex justify-center items-center">
        <img
          src={image.url}
          alt={image.alt}
          className="max-h-[80vh] max-w-full rounded-lg shadow-2xl object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-4xl font-bold hover:text-gray-300 transition-colors bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center z-10"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal; 
