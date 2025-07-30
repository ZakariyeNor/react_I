import React from 'react'
import Shoe from './Shoe';

function RenderingLists() {
    const showItems = [
        'Nike',
        'Puma',
        'Reebok'
    ]

    const shoes = [
        {
            title: "Air Max 90",
            manufacturer: "Nike",
            price: 129.99
        },
        {
            title: "UltraBoost 22",
            manufacturer: "Adidas",
            price: 149.99
        },
        {
            title: "Classic Leather",
            manufacturer: "Reebok",
            price: 89.99
        }
    ];


    return (
        <div>
            {showItems.map(shoe => {
                return <h3>{shoe}</h3>
            })}
            <hr />
            {
                shoes.map(shoow => {
                    return (
                        <div>
                            <h4>{shoow.title}</h4>
                            <p>{shoow.manufacturer}</p>
                            <p>{shoow.price}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                shoes.map(shoow => {
                    return <Shoe shoow={shoow} />
                })
            }
        </div>
    )
}

export default RenderingLists