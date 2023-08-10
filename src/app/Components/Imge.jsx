import React from "react";
import Marquee from "react-fast-marquee";
import image1 from "../../assets/marq1.jpg";
import image2 from "../../assets/marq2.jpg";
import image3 from "../../assets/marq3.jpg";
import image4 from "../../assets/marq4.png";
import image5 from "../../assets/marq5.png";
import image6 from "../../assets/marq6.jpeg";
import image7 from "../../assets/marq7.png";
import Image from "next/image";

const Imge = () => {
  return (
    <Marquee>
      <Image
        className="animate-pulse"
        src={image1}
        alt="Image 1"
        width={150}
        height={150}
      />
      &emsp;
      <Image src={image2} alt="Image 2" width={150} height={150} />
      &emsp;&emsp;&emsp;
      <Image src={image3} alt="Image 3" width={150} height={150} />
      &emsp;&emsp;&emsp;
      <Image
        className="animate-pulse"
        src={image4}
        alt="Image 4"
        width={150}
        height={150}
      />
      &emsp;&emsp;&emsp;
      <Image src={image5} alt="Image 5" width={150} height={150} />
      &emsp;&emsp;&emsp;
      <Image
        className="animate-pulse"
        src={image6}
        alt="Image 5"
        width={150}
        height={150}
      />
      &emsp;&emsp;&emsp;
      <Image src={image7} alt="Image 5" width={150} height={150} />
      &emsp;&emsp;&emsp;
      <Image src={image3} alt="Image 3" width={150} height={150} />
    </Marquee>
  );
};

export default Imge;
