import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {USER_DATA} from "../../mocks/user-data";

const PageLayout = (props) => {
  const {pageClasses, children} = props;

  return (
    <div className={`${pageClasses ? pageClasses.join(` `) : ``}`}>
      <Header user={USER_DATA}/>

      {children}
    </div>
  );
};

PageLayout.propTypes = {
  pageClasses: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.object
  ])
};

export default PageLayout;
