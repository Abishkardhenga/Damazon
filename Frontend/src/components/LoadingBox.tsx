import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const LoadingBox: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ThreeCircles
        visible={true}
        height={100}
        width={100}
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default LoadingBox;
