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
      <div className="max-w-screen-xl xl:lg:md:sm:mx-auto md:pt-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between mx-6 mt-8">
          <div className="w-full md:w-auto ">
            <div className="md:sticky top-10 flex flex-col gap-4 max-w-[400px] mx-auto">
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
          <div className="flex-grow ">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
