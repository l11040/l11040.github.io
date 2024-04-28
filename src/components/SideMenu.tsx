import { Atom, Book, Edit, Fire, People } from "../icons/icon";
import Card from "./Card";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
  return (
    // rounded - xl
    <div className="fixed bottom-0 left-0 right-0 z-10 md:relative">
      <Card className="rounded-b-none md:rounded-xl">
        <ul className="flex flex-wrap justify-center gap-2 pb-3 font-medium md:flex-col md:pb-0">
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
