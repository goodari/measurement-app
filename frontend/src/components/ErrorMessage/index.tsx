import React, { FunctionComponent } from "react";
import { UIError } from "../../state/measurement/types";

type PropType = {
  error: UIError;
};

const ErrorMessage: FunctionComponent<PropType> = ({ error }) => {
  return (
    <div className="w-full text-center bg-red-700 text-white">
      {error.message}
    </div>
  );
};

export default ErrorMessage;
