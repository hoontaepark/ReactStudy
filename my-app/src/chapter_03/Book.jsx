import React from "react";

function Book(props){
    return (
        <div>
            <h1>{`이책의 이름은 ${props.name}입니다.`}</h1> 
            <h2>{`이 책은 총 ${props.numOfPage} 페이지로 이뤄져있습니다.`}</h2>
        </div>
    );
}


export default Book;