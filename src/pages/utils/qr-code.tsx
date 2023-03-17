import { FC, useState } from "react";
import QRCode from "qrcode.react";

export const QrCode: FC = () => {
  const [inputValue, setValue] = useState("");

  const downloadQR = () => {
    const canvas = document.getElementById(
      "qr-code-canvas",
    ) as HTMLCanvasElement;
    const pngUrl = canvas
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
    <div className="container flex flex-col items-center text-center">
      <h1 className="py-4">QR code generator</h1>
      <input
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="URL"
        className="p-2 rounded mb-4 border-2 text-md"
      />

      <QRCode
        id="qr-code-canvas"
        value={inputValue}
        size={200}
        // level={"H"}
        includeMargin={true}
      />
      <a onClick={downloadQR} className="mt-4 underline cursor-pointer">
        Download QR
      </a>
    </div>
  );
};
