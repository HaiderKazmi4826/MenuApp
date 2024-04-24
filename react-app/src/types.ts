export interface MenuProps {
    img: string,
    title: string,
    price: number,
    desc: string,
    key: number                     
}  

export interface Category{
    category : string
}

type ClickEvent = React.MouseEvent<HTMLButtonElement>

export interface CategoriesProps{
    categories: string[],
    updateMenuItems: (event: ClickEvent)=> void;
}