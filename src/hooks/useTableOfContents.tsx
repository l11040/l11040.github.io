import { useEffect, useState, useRef, RefObject } from "react";

// Heading 데이터 타입 정의
export interface Heading {
  text: string;
  id: string;
  level: number;
}

const useTableOfContents = (): {
  headings: Heading[];
  ref: RefObject<HTMLDivElement>;
} => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // 레퍼런스된 div 내부에서 h1, h2, h3 태그를 모두 찾아서 배열로 만듭니다.
    const headingElements = Array.from(document.querySelectorAll("h1, h2"));

    // 각 heading 요소의 텍스트와 id를 저장합니다.
    const headingsData: Heading[] = headingElements.map((heading) => {
      const element = heading as HTMLElement; // HTMLElement로 캐스팅
      return {
        text: element.innerText,
        id:
          element.id ||
          element.textContent?.replace(/\s+/g, "-").toLowerCase() ||
          "",
        level: Number(element.tagName[1]), // h1 -> 1, h2 -> 2, h3 -> 3
      };
    });

    // id가 없는 경우 자동으로 id를 추가합니다.
    headingElements.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = headingsData[index].id;
      }
    });

    setHeadings(headingsData);
  }, [ref]);

  return { headings, ref };
};

export default useTableOfContents;
