import React from 'react'
import "../../../uploads/styles/components/components.css"

const CounterSec = () => {
    return (
        <>
            <section>
                <div className="counter-sec">
                    <div className="container">
                        <div className="grid-box">
                            <div className="col">
                                <h4><span className="count" data-count="30">30</span>+</h4>
                                <p>Years of building in Vadodara</p>
                            </div>
                            <div className="col">
                                <h4><span className="count" data-count="1500">1500</span>+</h4>
                                <p>Families who call Courtyard home</p>
                            </div>
                            <div className="col">
                                <h4><span className="count" data-count="50">50</span>+</h4>
                                <p>Residential, commercial &; mixed-use projects delivered</p>
                            </div>
                            <div className="col">
                                <h4><span className="count" data-count="17">17</span>+</h4>
                                <p>Ongoing developments shaping the city’s future</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CounterSec