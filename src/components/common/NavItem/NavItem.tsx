import { FC } from "react";

const NavItem: FC<Props> = ({ category, isActive, onClickHandler, index }) => {

    return (
        <div className={`h-[42px] min-w-[100px] rounded-xl ${isActive ? 'bg-cyan-600' : 'bg-inherit'} text-white p-4 border-gray-800 border cursor-pointer`}
            onClick={() => onClickHandler(index)}>
            <span className='h-full flex items-center justify-center'>{category}</span>
        </div>
    )
}

type Props = {
    category: string
    isActive?: boolean
    index: number
    onClickHandler: (index: number) => void
}

export default NavItem;