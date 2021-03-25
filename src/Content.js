import React, {useState} from 'react';
import Card from "./Card";

function Content(props) {
        return(
            <div className="content">
                {props.base.map((product) => {
                    return(
                    <Card
                        product={product}
                        setBought={props.setBought}/>
                    )
                })
                }
            </div>
        )
}
export default Content;