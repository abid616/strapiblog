import React,{useState} from 'react';
import Link from "next/link";
import { v1 as uuidv1 } from 'uuid';
import { FaAlignJustify, FaTimes } from "react-icons/fa";

export const Navigation = ({categories}) => {
    const [showMenu, setShowMenu] = useState(false)
    const categoryList = () => {
        return(
            <div>
                {categories.map((category, i)=>{
                    return(
                        <Link as={`/category/${category.slug}`} href="/category/[id]">
                            <a
                                key={i.name}
                                className="text-sm md:text-lg uppercase font-bold text-gray-700 px-2 md:px-3 hover:bg-gray-300 rounded transition-colors duration-300"
                            > {category.name} </a>
                        </Link>
                    )
                })}
            </div>
        )
        
    }

    let menu
    let menuMask

    if(showMenu){
        menu = 
            <div className="fixed bg-white top-14 left-0 w-4/5 h-5/12 z-50 shadow">
                {categoryList()}
            </div>
        menuMask = 
            <div
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={() => setShowMenu(false)}
            >

            </div>
    }


    return (
        <nav>
            <div className="hidden md:block">
                {categoryList()}
            </div>
            <FaAlignJustify className="md:hidden" onClick={() => setShowMenu(!showMenu)} />
            {menuMask}
            {menu}
        </nav>
    )
}
