import * as React from "react"
const Linkedin = (props) => (
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
        d="M15 0C6.715 0 0 6.715 0 15s6.715 15 15 15 15-6.715 15-15S23.285 0 15 0Zm-4.195 21.275H7.88v-9.357h2.924v9.357ZM9.264 10.746H9.24c-1.06 0-1.746-.715-1.746-1.623 0-.926.71-1.623 1.787-1.623 1.078 0 1.74.697 1.764 1.623.006.902-.68 1.623-1.781 1.623ZM22.5 21.276h-3.316v-4.84c0-1.266-.516-2.133-1.659-2.133-.873 0-1.359.586-1.582 1.148-.082.2-.07.48-.07.768v5.056h-3.287s.041-8.578 0-9.357h3.287v1.47c.193-.644 1.242-1.558 2.918-1.558 2.08 0 3.709 1.348 3.709 4.242v5.203Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props} d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Linkedin