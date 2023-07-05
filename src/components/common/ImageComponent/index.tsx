const ImageComponent = ({ img }: { img: any }) => {
  if (!img?.sizes) {
    return <></>;
  }
  return (
    <>
      <img
        src={img.url}
        alt={img.alt}
        width={img.width}
        height={img.height}
        srcSet={`${img.sizes["2048x2048"]} 2048w,${img.sizes["1536x1536"]} 1536w`}
        sizes="(min-width: 1024px) 2048vw,(max-width: 1024px) 1536vw"
        style={{
          objectFit: "cover",
        }}
      ></img>
    </>
  );
};

export default ImageComponent;
