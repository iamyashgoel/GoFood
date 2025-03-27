import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItems, setFoodItems] = useState([]);
    const [search, setSearch] = useState("");
    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setFoodItems(response[0]);
        setFoodCategory(response[1]);
        //console.log(response[0], response[1]);
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <div><Navbar /></div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div class="carousel-caption" style={{ zIndex: "2" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="/burger.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="/pizza.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="/momos.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="momos" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
            <div className='container'>
                {
                    foodCategory != []
                        ? foodCategory.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className='fs-3 m-3'>
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {
                                        foodItems != []
                                        ? foodItems.filter((item) => (item.CategoryName == data.CategoryName) && (item.name.toLowerCase().includes(search))).map((filteredItems) => {
                                            return (
                                                <div key={filteredItems._id} className='col-12 col-md-6 col-lg-4 col-xl-3'>
                                                    <Card foodItems = {filteredItems}
                                                        options={filteredItems.options[0]}
                                                    ></Card>
                                                </div>
                                            )
                                        })
                                        : <div> No such data found </div>
                                    }
                                </div>
                            )
                        })
                        : <div> aajjacbl </div>
                }
            </div>
            <div><Footer /></div>
        </>
    )
}
