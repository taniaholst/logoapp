import React from "react";

interface ListOfImagesProps {
    photo: string;
    text: string;
    key: number;
}

function ListOfImages(props: ListOfImagesProps) {
    return (
        <div key={props.key}>
            <img src={props.photo} alt=''/>
            <p>{props.text}</p>
        </div>
    );
}

export default ListOfImages;
