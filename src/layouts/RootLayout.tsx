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
        <div className="flex flex-col justify-between gap-8 px-3 py-4 pb-[100px] md:flex-row md:pb-8">
          <div className="h-auto w-full md:w-auto">
            <div className="mx-auto flex flex-col gap-4 md:sticky md:top-10">
              <Profile
                avatars_URL="https://avatars.githubusercontent.com/u/113540683?v=4"
                name="Lee Jong Youn"
                location="Korea"
                job="Front-End/Game Dev/Game Artist"
                github_URL="https://github.com/l11040"
                instagram_URL="https://www.instagram.com/repapeel/"
                desc="안녕하세요 이종윤입니다."
              />
              <SideMenu />
              <GithubContributions username={"l11040"} />
            </div>
          </div>
          <div className="m-[-1rem] w-auto max-w-[866px] flex-grow overflow-x-hidden p-[1rem] pb-7">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
