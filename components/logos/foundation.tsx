export const FNDLogo = ({ className, url }: { className?: string, url: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', maxWidth: '100%' }}>
    <svg
      className={className}
      viewBox="0 0 1050 210"
      fill="currentColor"
      role="img"
      focusable="false"
      style={{ display: 'block', width: '100px', height: 'auto' }}  // Adjust width as needed
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M396.667 100c0 55.228-44.772 100-100 100-55.229 0-100-44.772-100-100s44.771-100 100-100c55.228 0 100 44.772 100 100zm-285-96.667l111.666 193.334H0L111.667 3.333zm488.333 0H406.667v193.334H600V3.333z"
        clipRule="evenodd"
      ></path>
    </svg>
  </a>
);
