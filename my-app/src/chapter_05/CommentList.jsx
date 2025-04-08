import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name: "Kim",
        comment: "안녕하세요, 소통합시다.",
    },
    {
        name: "Park",
        comment: "안녕하세요, 소통해요.",
    }
];


function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Commmnet name ={comment.name} comment ={comment.comment}/>    
                );
        })}
        </div>
    );
}

export default CommentList;