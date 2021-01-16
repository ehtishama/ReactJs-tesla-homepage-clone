import React from 'react'
import './Item.css'

function Item(props) {
    return (
        <div className={"item"} style={{
            backgroundImage: `url(${props.background})`
        }}>
            <div className="content">
                <h2 className="heading"></h2>
                <h2 className="description"></h2>
            </div>

            <div className="buttons">

            </div>
        </div>
    )
}

export default Item