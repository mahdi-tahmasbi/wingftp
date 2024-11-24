import Image from "next/image";

const Icon = ({ src, alt, width = 24, height = 24, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default Icon;
