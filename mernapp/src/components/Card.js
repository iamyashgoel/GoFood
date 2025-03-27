import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {

    const priceRef = useRef();
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let data = useCart();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');
    let finalPrice = quantity * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value);
    }, [])

    const handleAddToCart = async (event) => {
        let food = []
        for (let item of data) {
            if (item.id === props.foodItems._id) {
                food = item;
                break;
            }
        }

        if (food != []) {
            if (food.size === size) {
                await dispatch({
                    type: "UPDATE",
                    id: props.foodItems._id,
                    price: finalPrice,
                    quantity: quantity
                })
                return;
            }
            else {
                await dispatch({
                    type: "ADD",
                    id: props.foodItems._id,
                    name: props.foodItems.name,
                    price: finalPrice,
                    quantity: quantity,
                    size: size,
                    img: props.foodItems.img
                })

                return;
            }
        }
        else {
            await dispatch({
                type: "ADD",
                id: props.foodItems._id,
                name: props.foodItems.name,
                price: finalPrice,
                quantity: quantity,
                size: size,
                img: props.foodItems.img
            })
            return;
        }
    }

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18.5rem", "maxHeight": "360px" }}>
                    <img src={props.foodItems.img} className="card-img-top" alt="..." style={{ height: "170px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItems.name}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQuantity(e.target.value)}>
                                {Array.from(Array(6), (e, i) => (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                ))}
                            </select>

                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {priceOptions.map((data) => (
                                    <option key={data} value={data}>{data}</option>
                                ))}
                            </select>

                            <div className='d-inline h-100 fs-5'>
                                ₹{finalPrice}/-
                            </div>
                            <hr />
                            <button className='btn btn-success justify-center mx-1 my-2' onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
