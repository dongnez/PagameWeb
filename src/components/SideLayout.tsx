import { HTMLAttributes } from "react";
import DownloadButton from "./DownloadButton";
import PagameTitle from "./PagameTitle";
import { Link } from "react-router-dom";

const SideLayout = ({...rest}:HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest} className="max-h-screen flex items-center justify-center">
      <div className="sm:w-80">
        <div className="  flex-col flex justify-between items-center">
          <Link to={'/'} className="text-center w-full hidden sm:block">
            <PagameTitle className="text-center text-3xl sm:text-5xl " />
          </Link>
          <div className="my-3 w-fit flex-col flex gap-3">
            <DownloadButton device="android" />
            <DownloadButton device="ios" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideLayout;
