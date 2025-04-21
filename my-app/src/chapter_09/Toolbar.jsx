import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottion: "1px solid grey",
    },

    greeting:{
        marginRight: 8,
    },
};

function Toolbar(proops){
    const { isLoggedIn, onClickLogin, onClickLogout} = proops;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>Welcome!</span>}

            {isLoggedIn ? (
                <button onClick = {onClickLogout}>로그아웃</button>
            ) : (
                <button onClick = {onClickLogin}>로그인</button>
            )}
        </div>
    );
}


export default Toolbar;