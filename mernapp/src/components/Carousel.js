import React from 'react'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div class=" carousel-captionddd" style={{ zIndex: "2" }}>
                        <form className=" d-flex justify-content-center">
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search Here..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="/burger.jpg" className="d-block w-100" style={{ filter: "brightness(30%)", height: "10px"}} alt="burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="/pizza.jpg" className="d-block w-100" style={{ filter: "brightness(30%)", height: "200px", objectFit: "cover" }} alt="pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="/momos.jpg" className="d-block w-100" style={{ filter: "brightness(30%)", height: "200px", objectFit: "cover" }} alt="momos" />
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
        </>
    )
}
