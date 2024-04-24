const Categories = ({categories,updateMenuItems}: any) => {

  return(
    <div className="flex items-center justify-center flex-wrap gap-10 my-10">
      {
        categories.map((category:any,index:number)=>{
          return(
            <button key={index} onClick={(e)=> updateMenuItems(e)} className="capitalize border-2 border-solid border-orange-300 rounded-sm w-[100px] text-orange-400">
              {category}
            </button>
          )
        })
      }
    </div>
  )
};

export default Categories;
