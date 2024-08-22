import { ReactNode } from "react";
import GithubContributions from "../components/GithubContributions";
import Profile from "../components/Profile";
import SideMenu from "../components/SideMenu";
import TopButton from "../components/TopButton";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <div className="max-w-screen-xl md:pt-8 xl:lg:md:sm:mx-auto">
        <div className="flex flex-col justify-between gap-10 overflow-x-clip p-0 pb-[100px] pt-4 md:flex-row md:gap-4 md:pb-8">
          <div className="h-auto w-full md:max-w-[334px]">
            <div className="mx-auto flex h-full flex-col gap-4">
              <Profile
                avatars_URL="https://avatars.githubusercontent.com/u/113540683?v=4"
                name="Lee Jong Youn"
                location="Korea"
                job="Front End/Game Dev"
                github_URL="https://github.com/l11040"
                instagram_URL="https://www.instagram.com/repapeel/"
                desc="안녕하세요 이종윤입니다."
              />
              <GithubContributions username={"l11040"} />
              <SideMenu />
              <div className="flex flex-col gap-4 md:sticky md:top-10">
                <div id="index" className="collapse z-10 md:visible"></div>
              </div>
            </div>
          </div>
          <div className="m-[-1rem] w-auto max-w-[866px] flex-grow overflow-x-hidden p-[1rem] pb-7">
            <div>{children}</div>
          </div>
        </div>
      </div>
      <TopButton />
    </>
  );
}
