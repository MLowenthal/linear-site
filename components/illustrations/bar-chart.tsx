export const BarChartIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="400" // You can adjust the width and height as needed.
    height="500"
    fill="none"
    viewBox="0 0 415.881 415.881" // Adjusted viewBox to match the new SVG's content.
  >
    <defs>
      <linearGradient id="bar-linear-purple" x1="207.941" y1="0.645" x2="207.941" y2="415.526" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7877C6" stopOpacity="1" />
        <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="bar-linear-white" x1="207.941" y1="0.645" x2="207.941" y2="415.526" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#bar-linear-purple)" // Applying the purple gradient to stroke
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      {/* Replaced path data with new SVG paths */}
      <path d="M179.641 189.565c2.455 0 4.869.193 7.223.561l36.999-36.998c-13.193-7.048-28.249-11.051-44.221-11.051-51.92 0-94.162 42.241-94.162 94.162 0 51.921 42.242 94.162 94.162 94.162s94.161-42.241 94.161-94.162c0-15.973-4.002-31.027-11.051-44.22l-36.997 36.999a46.86 46.86 0 01.56 7.222c0 25.736-20.937 46.674-46.672 46.674-25.736 0-46.674-20.938-46.674-46.674s20.936-46.675 46.672-46.675z" />
      <path d="M290.454 164.316c13.488 20.712 21.338 45.417 21.338 71.922 0 72.87-59.281 132.153-132.15 132.153S47.489 309.108 47.489 236.239s59.283-132.153 132.152-132.153c26.508 0 51.211 7.851 71.924 21.34l34.104-34.104c-29.738-21.817-66.402-34.724-106.027-34.724C80.587 56.598.001 137.185.001 236.239c0 99.054 80.586 179.642 179.641 179.642 99.054 0 179.638-80.588 179.638-179.642 0-39.626-12.904-76.29-34.721-106.026l-34.105 34.103z" />
      <path d="M415.415 56.64a9.94 9.94 0 00-7.775-6.793l-35.449-6.157-6.156-35.45a9.943 9.943 0 00-6.793-7.774 9.931 9.931 0 00-10.027 2.447l-27.412 27.411a9.955 9.955 0 00-2.912 7.029l.002 40.896-148.1 148.096c-5.176 5.177-5.176 13.566 0 18.743 5.178 5.175 13.568 5.177 18.744 0L337.632 96.991h40.896a9.937 9.937 0 007.027-2.911l27.412-27.413a9.93 9.93 0 002.448-10.027z" />
    </g>
  </svg>
);
