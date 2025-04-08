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
    contentContainer:{
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
        <div style={style.wrapper}>
            <div style={style.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/99/Portrait_Placeholder.png"
                    style={style.image}
                />
            </div>

            <div style={style.contentContainer}>
                <span style={style.nameText}>MR.Kim</span>
                <span style={style.commentText}>
                            first component
                </span>
            </div>
        </div>
    );
}

export default Comment;