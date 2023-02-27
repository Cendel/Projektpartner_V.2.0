import React from "react";
import "./downloadSection.scss";
import { getFileExtension } from "../../../helpers/functions/fileFunctions";
import {
  AiOutlineFilePdf,
  AiOutlineFileImage,
  AiOutlineFileText,
} from "react-icons/ai";

const DownloadSection = ({ files }) => {
  return (
    <div className="download-media">
      {files && files.length > 0 && (
        <div>
          <h5>Downloads:</h5>
          <ul>
            {files.map((file) => (
              <li key={file.name}>
                <span>
                  {getFileExtension(file.url) === "pdf" ? (
                    <AiOutlineFilePdf />
                  ) : getFileExtension(file.url) === "jpg" ||
                    getFileExtension(file.url) === "png" ? (
                    <AiOutlineFileImage />
                  ) : (
                    <AiOutlineFileText />
                  )}
                </span>
                <a href={file.url} target="_blank" download={file.name}>
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DownloadSection;
