import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import {smartTrim} from "../../lib/blog"

export const HeroCard = ({article}) => {
    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a>
                <div className=" object-center card bordered md:p-4 md:rounded">
                    {/* Image */}
                    <figure>
                        <Images  image={article.image} />
                    </figure>
                    
                    {/* discription */}
                    <div className="card-body">
                        <h2 className="card-title">{article.title}</h2>
                        <p>{article.description}</p>
                    </div>
                </div>                
            </a>
        </Link>
    )
}



