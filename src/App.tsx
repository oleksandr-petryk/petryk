import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { BaseLayout } from "./components/BaseLayour";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { QrCode } from "./pages/utils/qr-code";

export const App: FC = () => {
  return (
    <RecoilRoot>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/utils/qr-code" element={<QrCode />} />
        </Routes>
      </BaseLayout>
    </RecoilRoot>
  );
};
