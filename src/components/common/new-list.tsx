import PostList from '@/data/post-list.json';
import "@/assets/styles/new-list.css"
export const NewLayout: React.FC = function () {
    return(
        <div className="news">
                {PostList.map(PostList => (
                    <div className='new'>
                        <h1 key={PostList.id} className="new-title">
                            {PostList.title}
                        </h1>
                        <img src={PostList.img} alt="" className="new-img"/>
                        <p className="new-post">{PostList.post}</p>
                    </div>
                ))}
        </div>
    )
}