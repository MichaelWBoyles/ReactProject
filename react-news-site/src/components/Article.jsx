export default function Article({id, title, created_date, url, author, object_id}) {

    return(
        <div>
            <a href={url}>Go to article page</a>
            <h5>Author: {author}</h5>
            <p>object id: {object_id}</p>
        </div>
    )
}