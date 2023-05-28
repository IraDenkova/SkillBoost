import * as React from "react"
const Twitter = (props) => (
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
        d="M15 0C6.715 0 0 6.715 0 15s6.715 15 15 15 15-6.715 15-15S23.285 0 15 0Zm5.988 12.668c.006.129.006.264.006.398 0 4.073-3.1 8.772-8.771 8.772-1.74 0-3.364-.51-4.723-1.383.24.03.486.041.738.041a6.187 6.187 0 0 0 3.827-1.318 3.074 3.074 0 0 1-2.877-2.139 3.146 3.146 0 0 0 1.394-.059 3.081 3.081 0 0 1-2.473-3.023v-.035c.416.228.891.369 1.395.387a3.086 3.086 0 0 1-1.371-2.567c0-.562.152-1.096.416-1.553a8.744 8.744 0 0 0 6.351 3.223 3.086 3.086 0 0 1 5.25-2.813 6.14 6.14 0 0 0 1.957-.75 3.091 3.091 0 0 1-1.353 1.706 6.185 6.185 0 0 0 1.77-.487 6.226 6.226 0 0 1-1.536 1.6Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props} d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Twitter
