import {useState} from 'react'
import Article from './Article'

export default function ArticleTeaser({article}) {

    const [showArticle,setShowArticle] = useState(false)

    // const renderIfShowArticle = () => {
    //     if (showArticle) {
    //         return <Article/>
    //     }
    // }

    // function updateShowArticle(){
    //     if(!showArticle){
    //         setShowArticle(true)
    //     }
    //     else{
    //         setShowArticle(false)
    //     }
    // }

    return(
        <div className="articleTeaser">
            <div onClick={() => setShowArticle(!showArticle)}>
                <h2>{article.id}. {article.title}</h2>
                <p>{article.created_date}</p>
            </div>

            {/* {showArticle && <Article />} */}

            {/* {renderIfShowArticle()} */}

            {showArticle ? <Article {...article} /> : ""}

            {/* {setShowArticle(!showArticle)} */}
        </div>
    )
}