import React, { useState } from "react";
import { mockApiCall } from "../api";

const UploadPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleUploadClick = async () => {
    try {
      setLoading(true);
      await mockApiCall();
    } catch (e) {
      alert(`Sever error : ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center gap-y-5">
      <h1 className="text-3xl font-bold">Upload Page</h1>
      <button
        disabled={loading}
        onClick={handleUploadClick}
        className="py-3 text-lg px-4 border rounded-lg bg-slate-400 text-white transition duration-150 disabled:opacity-50"
      >
        Unggah Data
      </button>
    </div>
  );
};

export default UploadPage;
