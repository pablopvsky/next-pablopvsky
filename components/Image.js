import Image from "next/image";

const MyImage = ({ width, height, src, aspectRatio, fit = "crop", ...props }) => {
  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
        <stop stop-color="#fee8fc" offset="20%" />
        <stop stop-color="#f3e8fe" offset="50%" />
        <stop stop-color="#fee8fc" offset="70%" />
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#fee8fc" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const aspetRatioToRatio = {
    "1:1": 1,
    "1:2": 1 / 2,
    "4:3": 3 / 4,
    "16:9": 9 / 16,
  };

  const heightCalc = aspectRatio ? calcAspectRatio(aspectRatio, width) : height;

  function calcAspectRatio(aspectRatio, width) {
    const ratio = aspetRatioToRatio[aspectRatio];

    return Math.floor(width * ratio);
  }

  const loader = (args) => {
    if(!aspectRatio){
      return `${args.src}&fit=${fit}&w=${args.width}&h=${args.height}`;
    }
    
    const loaderHeight = calcAspectRatio(aspectRatio, args.width);

    return `${args.src}&fit=${fit}&w=${args.width}&h=${loaderHeight}`;
  };

  return (
    <Image
      src={src}
      width={width}
      height={heightCalc}
      loader={loader}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      {...props}
    />
  );
};

export default MyImage;
