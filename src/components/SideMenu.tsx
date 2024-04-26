import { Atom, Book, Edit, Fire, People } from "../icons/icon";
import Card from "./Card";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
  return (
    // rounded - xl
    <div className="fixed md:relative bottom-0 left-0 right-0 z-10">
      <Card className="rounded-b-none md:rounded-xl">
        <ul className="font-medium flex flex-wrap justify-center md:flex-col gap-2 pb-3 md:pb-0">
          <SideMenuItem icon={<Fire />} label="Skills" />
          <SideMenuItem icon={<Book />} label="Project | Portfolio" />
          <SideMenuItem icon={<People />} label="Career" />
          <SideMenuItem icon={<Edit />} label="Blog" />
          <SideMenuItem icon={<Atom />} label="Art" />
        </ul>
      </Card>
    </div>
  );
}
