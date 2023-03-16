import type { NextPage } from "next";
import { useState } from "react";
import QRCode from "qrcode.react";

const QrCode: NextPage = () => {
  const [inputValue, setValue] = useState("");

  const downloadQR = () => {
    const canvas = document.getElementById("qr-code-canvas")!;
    const pngUrl = canvas
      // @ts-ignore
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container flex flex-col items-center">
      <h1 className="py-4">QR code generator</h1>
      <input
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="URL"
        className="p-2 rounded mb-4 border-2"
      />

      <QRCode
        id="qr-code-canvas"
        value={inputValue}
        size={290}
        level={"H"}
        includeMargin={true}
      />
      <a onClick={downloadQR} className="mt-4 underline cursor-pointer">
        Download QR
      </a>
    </div>
  );
};

export default QrCode;
