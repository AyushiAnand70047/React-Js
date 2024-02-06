import { useState } from "react";

export default function LikeDislikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);
    }
    let styles = {color: "yellow"};
    return (
        <>
            <p onClick={toggleLike}>
                {
                    isLiked ? (<i class="fa-solid fa-thumbs-up" style={styles}></i>)
                    : (<i class="fa-regular fa-thumbs-up"></i>)
                }
            </p>
        </>
    )
}