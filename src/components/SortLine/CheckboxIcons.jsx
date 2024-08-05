import React from "react";

export const CheckedIcon = () => {
  return (
    <svg width="2.25rem" height="2.25rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 6C0 2.68629 2.68629 0 6 0H30C33.3137 0 36 2.68629 36 6V30C36 33.3137 33.3137 36 30 36H6C2.68629 36 0 33.3137 0 30V6Z"
        fill="#0D50FF"
      />
      <path d="M26 12L15 23L10 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const UncheckedIcon = () => {
  return (
    <svg width="2.25rem" height="2.25rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H30C33.0376 0.5 35.5 2.96243 35.5 6V30C35.5 33.0376 33.0376 35.5 30 35.5H6C2.96243 35.5 0.5 33.0376 0.5 30V6Z"
        stroke="#DDDDDD"
      />
    </svg>
  );
};
