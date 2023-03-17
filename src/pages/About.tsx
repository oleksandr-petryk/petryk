import { FC, useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { EditOnGitHub } from "../components/EditOnGitHub";

export const About: FC = () => {
  const [markDown, setMarkDown] = useState("");

  const rawPageUrl =
    "https://raw.githubusercontent.com/Sasha-hk/petryk/main/content/About.md";
  const editOnGitHubUrl =
    "https://github.com/Sasha-hk/petryk/edit/main/content/About.md";

  const getMd = async (url: string) => {
    try {
      const { status, data } = await axios.get(url, {
        params: {
          t: new Date().getTime(),
        },
      });

      if (status === 200) {
        setMarkDown(data);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  getMd(rawPageUrl);

  return (
    <section className="container">
      {markDown.length !== 0 ? (
        <>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markDown}</ReactMarkdown>
          <EditOnGitHub url={editOnGitHubUrl} />
        </>
      ) : (
        <div className="flex justify-center mt-20">
          <ReactLoading type="spokes" color="gray" height={70} width={70} />
        </div>
      )}
    </section>
  );
};
