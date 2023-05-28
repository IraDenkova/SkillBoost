import React from "react";

const Facebook = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill={props} 
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={props} 
          d="M15 0C6.715 0 0 6.715 0 15s6.715 15 15 15 15-6.715 15-15S23.285 0 15 0Zm3.31 12.457-.17 2.244h-2.302v7.793h-2.906v-7.793h-1.553v-2.244h1.553v-1.506c0-.662.017-1.687.498-2.326.51-.674 1.207-1.13 2.408-1.13 1.957 0 2.777.28 2.777.28l-.386 2.297s-.645-.187-1.248-.187c-.604 0-1.143.217-1.143.82v1.752h2.473Z"
        />
      </g>
    </svg>
  );
};

export default Facebook;
