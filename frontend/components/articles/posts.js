import React, { useEffect, useState } from 'react'
import {HeroCard} from './cards'
import { v1 as uuidv1 } from 'uuid';

export const Posts = ({ articles, categories}) => {
    const [latestPosts, setLatestPosts] = useState([])
    useEffect(() => {
        setLatestPosts(articles.slice(0, 4))
    }, [articles])

    return (        
        <div>
            <div>
                <div className="card-title" >Tranding</div>
                <div className="grid md:grid-cols-4">
                    {latestPosts.map((article) => {
                        return (
                            <HeroCard article={article} key={`article__${article.slug}`} />
                        );
                    })}
                </div>
            </div>  
        </div>
    )
}
