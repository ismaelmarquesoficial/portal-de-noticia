"use client"
import PostList from '@/data/post-list.json';
import "@/assets/styles/new-list.css";

export const NewLayout: React.FC = function () {
    const handleOpenNew = (id:number) => {
            alert(id)
    }
    return(
        <div className="news">
                {PostList.map(PostList => (
                    <div className='new' >
                        <h1 key={PostList.id} className="new-title" onClick={() =>handleOpenNew(PostList.id)}>{PostList.title}</h1>
                        <img src={PostList.img} alt="" className="new-img"/>
                        <h6>{PostList.data}</h6>
                        <p className="new-post">{PostList.post}</p>
                    </div>
                ))}
        </div>
    )
}