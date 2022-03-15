import React from "react";

import classes from "./Icons.module.css";

export default function IconBox() {
  return (
    <svg
      className={classes.iconBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>inbox</title>
      <path d="M21 16h6.775l-4.375-7h-13.8l-4.375 7h6.775v2.002c0 1.103 0.896 1.998 1.997 1.998h5.005c1.103 0 1.997-0.898 1.997-1.998v-2.002zM22 17v1.5c0 1.39-1.118 2.5-2.496 2.5h-6.008c-1.381 0-2.496-1.119-2.496-2.5v-1.5h-6v7h23v-7h-6zM4 16.5v-0.5l5-8h15l5 8v9h-25v-8.5z"></path>
    </svg>
  );
}
