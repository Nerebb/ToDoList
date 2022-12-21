import React from "react";

const Header = ({title, subTitle}) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <span>{subTitle}</span>
    </>
  );
};

export default Header;
