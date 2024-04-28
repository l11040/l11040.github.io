import { ReactNode } from "react";
import GithubContributions from "../components/GithubContributions";
import Profile from "../components/Profile";
import SideMenu from "../components/SideMenu";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <div className="max-w-screen-xl md:pt-8 xl:lg:md:sm:mx-auto">
        <div className="flex h-auto flex-col justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="w-full md:w-auto ">
            <div className="top-10 mx-auto flex max-w-[400px] flex-col gap-4 md:sticky">
              <Profile
                avatars_URL="https://avatars.githubusercontent.com/u/113540683?v=4"
                name="Lee Jong Youn"
                location="Korea"
                job="Front-End/Game Dev/Game Artist"
                github_URL="https://github.com/l11040"
                instagram_URL="https://www.instagram.com/repapeel/"
                desc="안녕하세요 이종윤입니다."
              />
              <GithubContributions username={"l11040"} />
              <SideMenu />
            </div>
          </div>
          <div className="w-full">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
