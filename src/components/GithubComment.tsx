import { useEffect, useRef } from "react";

export default function GithubComment() {
  const commentsEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "l11040/l11040.github.io");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "preferred-color-scheme");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return <div ref={commentsEl} />;
}
