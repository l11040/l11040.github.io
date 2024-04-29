import { Atom, Book, Edit, Fire, Objects, People } from "../icons/icon";
import Card from "./Card";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
  return (
    // rounded - xl
    <div className="fixed bottom-0 left-0 right-0 z-10 md:relative">
      <Card className="rounded-b-none md:rounded-xl">
        <ul className="flex flex-wrap justify-center gap-2 pb-3 font-medium md:flex-col md:pb-0">
          <SideMenuItem icon={<Objects />} label="Home" href="/" />
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
