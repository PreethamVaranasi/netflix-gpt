import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="mt-4">
      <img className="w-44" alt="Netflix-logo" src={LOGO} />
    </div>
  );
};

export default Header;
