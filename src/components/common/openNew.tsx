import { OpenNew } from "@/types/type_openNew"

export const openNew = function ({id,title,img,post,link,ads}: OpenNew) {
    return(
        <div key={id}>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{post}</p>
            <img src={ads} alt="" />
            <a href={link}></a>
        </div>
    )
}