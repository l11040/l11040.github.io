import Card from "@/components/common/Card";
import SideMenuItem from "./SideMenuItem";
import { Atom, Book, Edit, Fire, People } from "@/icons/icon";

export default function SideMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 md:relative">
      <Card className="rounded-b-none !py-2 md:rounded-xl md:!p-4">
        <ul className="flex flex-wrap justify-center gap-2 pb-3 font-medium md:flex-col md:pb-0">
          {/* <SideMenuItem icon={<Objects />} label="Home" href="/" /> */}
          <SideMenuItem icon={<Fire />} label="Skills" href="/skills" />
          <SideMenuItem
            icon={<Book />}
            label="Project | Portfolio"
            href="project"
          />
          <SideMenuItem icon={<People />} label="Career" href="career" />
          <SideMenuItem icon={<Edit />} label="Blog" href="blog" />
          <SideMenuItem icon={<Atom />} label="Art" href="art" />
        </ul>
      </Card>
    </div>
  );
}
