import React from "react";

const style = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection:"row",
        border: "1px solid black",
        borderRadius : 16,
    },
    imageContainer:{

    },
    image:{
        width: 50,
        height: 50,
        borderRaduis: 25,
    },
    contenContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    nameText:{
        color:"black",
        fontSize:16,
        fontWeight: "bold",
    },
    commentText:{
        color:"black",
        fontSize: 16,
    },
};



function Comment(props){
    return(
        <div>
            <h1>first component</h1>
        </div>

    );
}

export default Comment;