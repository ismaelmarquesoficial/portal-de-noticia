"use client"
import PostList from '@/data/post-list.json';
import "@/assets/styles/new-list.css";
import { useState } from 'react';
import { TypeOpenNew } from '@/types/type_openNew';
import {OpenNew} from '@/components/common/openNew'


export const NewLayout: React.FC = function () {

    const [selectedPost, setSelectedPost] = useState<TypeOpenNew | null>(null);


    const handleOpenNew = (id:number) => {
        const post = PostList.find(post => post.id === id)
        setSelectedPost(post || null)
    };

    const handleClose = () => {
        setSelectedPost(null)
    };

    return(
        <div className="news">
            {selectedPost ? (
                <OpenNew post={selectedPost} onClose={handleClose} />
            ): (
                PostList.map(post => (
                    <div className='new' >
                        <h1 key={post.id} className="new-title" 
                            onClick={() =>handleOpenNew(post.id)}>
                            {post.title}
                        </h1>
                        <img src={post.img} alt="" className="new-img"/>
                        <h6>{post.data}</h6>
                        <p className="new-post">{post.post}</p>
                    </div>
                ))
            )}    
        </div>
    );
};