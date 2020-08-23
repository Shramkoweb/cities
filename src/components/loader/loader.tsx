import * as React from "react";

const Loader = (props) => {
  const {isError} = props;

  if (isError) {
    return (
      <div>
        <h1>{isError}</h1>
      </div>
    );
  } else {
    return (
      <div className="loader-wrapper">
        <p className="loader">Loading...</p>
      </div>
    );
  }
};

export default Loader;
