"use client"
import { useEffect } from 'react';

const TenXLaunchScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.10xlaunch.ai/widget';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-app-id', '3734c93a-5bbd-4876-a297-fcff38fe2fe5');

    document.body.appendChild(script);

    return () => {
      // Cleanup script when component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TenXLaunchScript;