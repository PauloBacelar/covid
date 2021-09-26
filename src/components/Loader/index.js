import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={350}
      viewBox="0 0 300 350"
      backgroundColor="#444444"
      foregroundColor="#333333"
    >
      <rect x="0" y="8" rx="3" ry="3" width="100" height="8" />
      <rect x="0" y="36" rx="3" ry="3" width="150" height="8" />
      <rect x="0" y="52" rx="3" ry="3" width="200" height="8" />
      <rect x="0" y="100" rx="3" ry="3" width="300" height="125" />
    </ContentLoader>
  );
};

export default Loader;
