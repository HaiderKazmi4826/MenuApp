import { useState } from "react";
import Categories from "./Categories";
import menu from "./data";
import Menu from "./Menu";

const App = () => {

  const setCategories = () => {
    const categories = menu.map((item) => item.category);
    const uniqueSet = new Set(categories);
    const allCategories = ["all", ...uniqueSet];
    return allCategories;
  };
  const [menuItems, setMenuItems] = useState(menu);
  const allCategories = setCategories();

  const handleUpdateMenuItems = (e:any)=>{
    const clickedCategory = e.target.textContent;
    const newCategory = allCategories.filter((category:string)=>{
      return category === clickedCategory;
    })
    const updatedCategory = newCategory.join(" ");
    if(updatedCategory === "all"){
       setMenuItems(menu)
      }else{
        const updatedMenuItems = menu.filter((item)=>{
          return item.category === updatedCategory;
        })
        setMenuItems(updatedMenuItems);
      }
    
    
  }

  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="font-bold text-[30px]">Our Menu</h1>
      <div className="w-[80px] h-[3px] bg-orange-400 mt-3"></div>
      <Categories categories={allCategories} updateMenuItems={handleUpdateMenuItems} />
      <div className="grid lg:grid-cols-2 gap-6">
        {menuItems.map((item) => {
          return <Menu key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default App;
