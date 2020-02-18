import React from "react";

interface ListOfImagesProps {
    photo: string;
    text: string;
    key: number;
}

function ListOfImages(props: ListOfImagesProps) {
    return (
        <div key={props.key} className="logo__container">
            <img src={props.photo} alt='' className="logo__image"/>
            <form>
                {/*<p className="logo__image">{props.text}</p>*/}
                <input/>
                <div className="logo__buttongroup">
                    <button>Hopp over</button>
                    <button type="submit">Bekreft</button>
                </div>
            </form>
        </div>
    );
}

export default ListOfImages;
