import { useState } from "react";
import NavItem from "../common/NavItem/NavItem";
import SearchBar from "./SearchBar/SearchBar";

const NavigationBar = () => {
    const movieCategory = ['Popular', 'Top Rated', 'Now Playing', 'Upcoming']
    const [activeIndex, setActiveIndex] = useState(0)
    const onClickHandler = (index: number) => {
        setActiveIndex(index)
        // if (activeIndex === 0)
    }

    return (
        <div className='h-16 bg-slate-700 flex justify-between items-center'>
            <nav className='pl-10 w-1/2 h-full flex items-center justify-start gap-4'>
                {movieCategory.map((category, index) => <NavItem key={index}
                    category={category}
                    isActive={index === activeIndex}
                    index={index}
                    onClickHandler={onClickHandler}
                />)}
            </nav>
            <SearchBar />
        </div>
    )
}

export default NavigationBar;