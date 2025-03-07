import React from "react";
import CurvedTextImage from "/images/circle-text.png";

export default function CurvedText() {
  return (
    <div className="position-absolute top-50 start-0 translate-middle-y hero-circle d-lg-block d-md-block ">
      <picture className="position-relative">
        <img src={CurvedTextImage} className="circular-div" width={90} alt="" />
        <svg
          className="position-absolute top-50 start-50 translate-middle circuler-svg"
          width="15"
          height="24"
          viewBox="0 0 15 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_309)">
            <path
              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_309">
              <rect width="15" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </picture>
    </div>
  );
}
