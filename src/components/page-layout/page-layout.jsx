import React from "react";
import PropTypes from "prop-types";

const PageLayout = (props) => {
  const {pageClasses, children} = props;

  return (
    <div className={`${pageClasses && pageClasses.join(` `)}`}>
      {children}
    </div>
  );
};

// TODO валидация children
PageLayout.propTypes = {
  pageClasses: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default PageLayout;
