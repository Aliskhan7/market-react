import React from 'react';

function Button(props) {
    return (
        <div className='card-button'>
            <button
                className='btn'
                onClick={() => props.setBought(props.id)}

            >
                {props.bought ? 'Товар добавлен' : 'Добавить в корзину'}
            </button>
        </div>
    );
}

export default Button;