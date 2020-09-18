const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => {
        return (
          <div className="image" key={image}>
            <img src={image} />
          </div>
        );
      })}

      <style jsx>
        {`
          .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 40px;
            max-width: 1240px;
            margin: 0 auto;
          }

          .gallery .image {
            width: 40%;
            padding: 20px;
          }

          img {
            width: 500px;
            height: 350px;
            border-radius: 5px;
          }

          @media (max-width: 600px) {
            .gallery .image {
              width: auto;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
