"use client";

import React, { useEffect } from 'react';

const TawkComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/64fa498ea91e863a5c124773/1h9oqum90'; 

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkComponent;
