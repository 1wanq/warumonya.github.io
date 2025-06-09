const Gallery = () => {
  const photos = [
    { src: "/images/temple.jpg", caption: "静寂の朝、古寺にて" },
    { src: "/images/moss.jpg", caption: "苔むした石段" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">写真ギャラリー</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {photos.map((photo, idx) => (
          <div key={idx} className="space-y-2">
            <img src={photo.src} alt={photo.caption} className="w-full rounded" />
            <p className="text-sm text-gray-700">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
