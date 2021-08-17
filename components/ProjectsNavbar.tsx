import { FunctionComponent } from "react";
import { Category } from "../type";


export const NavItem:FunctionComponent<{
  value: Category | "all";
  handlerFIlterCategory: Function;
  active: string;
 }> = ({ value, handlerFIlterCategory, active }) => {
   let className = "capitalize cursor-pointer  hover:text-purple-600"
   if(active === value) className += " text-purple-600 ";
   
  return (
    <li className={className} onClick={() => handlerFIlterCategory(value)}>
      {value}
    </li>
  );
};


const ProjectsNavbar: FunctionComponent<{
  handlerFIlterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props}/>
      <NavItem value="react" {...props}/>
      <NavItem value="mongoDB" {...props}/>
      <NavItem value="django" {...props}/>
      <NavItem value="node" {...props}/>
    </div>
  )
};

export default ProjectsNavbar;