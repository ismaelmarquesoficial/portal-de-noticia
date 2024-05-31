type Props = {
    id:number
    title:string;
    img:string;
    post:string;
    link:string;
    ads:string
}

export const openNew = function ({id,title,img,post,link,ads}: Props) {
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