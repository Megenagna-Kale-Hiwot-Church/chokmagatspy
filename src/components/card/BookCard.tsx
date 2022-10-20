

import { OmitProps } from 'antd/lib/transfer/ListBody';
import React from 'react';


type BookCartType = {
    image : string,
    username: String,
    title :String
}

const BookCard = (props:BookCartType) => {
    return (
        <>
            <div className="w-[70%] m-auto mt-2">
                    <img src={props.image} alt="" className="" />
                    <div className="mt-2 text-center">
                        <p>{ props.username}</p>
                        <h2>{ props.title}</h2>
                    </div>
            </div>
        </>
    );
}

export default BookCard;