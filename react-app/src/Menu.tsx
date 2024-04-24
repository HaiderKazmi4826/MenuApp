import { MenuProps } from "./types"

const Menu = ({img,title,price,desc}:MenuProps) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-2'>
        <div>
            <div className='w-[200px] h-[150px] overflow-hidden border-solid border-4 border-orange-400 rounded-md'>
            <img src={img} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
        <div>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
                <h5 className='capitalize font-bold'>{title}</h5>
                <p className='text-orange-400 font-semibold'>${price}</p>
            </div>
            <div className=' lg:block hidden my-3 w-full h-[1px] bg-orange-400'></div>
            <p className='max-w-[400px] mt-2'>{desc}</p>
        </div>
    </div>
  )
}

export default Menu