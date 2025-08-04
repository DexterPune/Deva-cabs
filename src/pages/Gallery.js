import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const Galleryy = () => {

  const galleryImages = [
    
    "/images/ourfleet/1.jpg",
    "/images/ourfleet/2.jpg",
    "/images/ourfleet/4.jpg",
    "/images/ourfleet/5.jpg",
    "/images/ourfleet/45.jpg",
    "/images/ourfleet/22.jpg",
    "/images/ourfleet/8.jpg",
    "/images/ourfleet/10.jpg",
    "/images/ourfleet/11.jpg",

   
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Function to open the modal with the clicked image
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  // Function to go to the next image
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Function to go to the previous image
  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <>
    

      <div className="breadcumb-wrapper" >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Gallery</h1>
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden space" id="gallery-sec">
        <div className="container">
          
          <div className="row gy-4 gallery-row4">
  {galleryImages.map((image, index) => (
    <div key={index} className="col-md-4 col-sm-6 col-12 ">
      <div className="gallery-box style5">
        <div className="gallery-img global-img Borderr">
          <img
            src={image}
            alt={`gallery image ${index + 1}`}
            onClick={() => openModal(image, index)} // Open modal when clicked
          />
          <a
            href={image}
            className="icon-btn popup-image"
          >
            <i className="fal fa-magnifying-glass-plus"></i>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Modal for viewing the image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <span className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </span>

            {/* Left navigation button */}
            <button className="modal-nav-btn prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Modal Image */}
            <img
              src={selectedImage} // Display the selected image
              alt="Selected Gallery"
              className="modal-image"
              onClick={(e) => {
                // If clicked in the center of the image, navigate
                const isLeftSide = e.clientX < window.innerWidth / 2;
                if (isLeftSide) {
                  prevImage();
                } else {
                  nextImage();
                }
              }}
            />

            {/* Right navigation button */}
            <button className="modal-nav-btn next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Galleryy;
