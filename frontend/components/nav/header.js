import React from 'react'
import {Navigation} from './navigation'
import Link from "next/link";

export default function Header({ categories, i}) {
    return (
        <nav className="p-2 md:p-8">
            <div className="flex justify-between " >
                <div className="flex items-center ">
                    <div className="inline-block h-6 w-6 rounded-full bg-gray-400"/>
                    <Link href="/">
                        <a className="ml-2 font-bold text-xl md:text-2xl">Money<span className="text-blue-500">thinker</span></a>
                    </Link>
                </div>
                <div>
                    <Navigation categories={categories} />
                </div>
            </div>
        </nav>
    )
}
