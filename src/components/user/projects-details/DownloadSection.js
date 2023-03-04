import React from "react";
import "./downloadSection.scss";
import { getFileExtension } from "../../../helpers/functions/fileFunctions";
import {
  AiOutlineFilePdf,
  AiOutlineFileImage,
  AiFillFolderOpen,
} from "react-icons/ai";
import { IoCloudDownloadSharp } from "react-icons/io5";

const DownloadSection = ({ files }) => {
  return (
    <div>
      {files && files.length > 0 && (
        <div className="download-media">
          <div className="head">
            <span>
              <IoCloudDownloadSharp />
            </span>
            <h5>PROJEKTMEDIEN</h5>
          </div>
          <ul></ul>
        </div>
      )}
    </div>
  );
};

export default DownloadSection;
