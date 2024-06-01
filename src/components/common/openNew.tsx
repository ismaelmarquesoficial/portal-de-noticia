import { TypeOpenNew } from "@/types/type_openNew"
import PostList from '@/data/post-list.json';
import "@/assets/styles/openNew.css"
import React from "react";

type TOpenNew = {
    post:TypeOpenNew | null;
    onClose: () => void;
}
export  const OpenNew: React.FC<TOpenNew> = function ({post,onClose}) {
    if (!post) return null;
    
    return(
        <div className="openNew-body" >
            <button onClick={onClose}>Voltar</button>
            <img className="openNew-body--img" src={post.img} alt="" />
            <h1>{post.title}</h1>
            <p>{post.post}</p>
        </div>
    );
};
