import * as React from "react";

const PageLayout = (props) => {
  const {
    children,
    pageClasses,
  } = props;

  return (
    <div className={`page ${pageClasses && pageClasses.join(` `)}`}>
      {children}
    </div>
  );
};

export default PageLayout;
