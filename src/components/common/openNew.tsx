import { OpenNew } from "@/types/type_openNew"
import PostList from '@/data/post-list.json';
import "@/assets/styles/OpenNew.css"

export const openNew = function ({id,title,img,post,link,ads}: OpenNew) {
    return(
        <div className="openNew-body" key={id}>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{post}</p>
            <img src={ads} alt="" />
            <a href={link}></a>
        </div>
    )
}