import React from 'react'

function index() {
    return (
        <div className="container-hero">
            <div className="left-hero">
                <h1>
                    Happy.<br />Ambitious.<br /> Pour Tout le Monde .<br />
                </h1>
            </div>
            <div className="right-hero">
                <div className='item-wrapper' style={{ backgroundColor: "rgba(216, 240, 78, 0.7)", }}>
                    <div className="item" style={{ backgroundImage: "url(" + '/assets/hero1.jpeg' + ")", height:"100%" }}>
                        
                    </div>

                </div>
                <div className='item-wrapper' style={{ backgroundColor: "rgba(238, 132, 52, 0.7)" }}>
                    <div className="item" style={{ backgroundImage: "url(" + '/assets/hero2.jpeg' + ")",height:"100%" }}></div>
                </div>
                <div className='item-wrapper' style={{ backgroundColor: "rgba(139, 21, 21, 0.7)" }}>
                    <div className="item" style={{ backgroundImage: "url(" + '/assets/hero3.jpeg' + ")",height:"100%" }}></div>
                </div>
                <div className='item-wrapper' style={{ backgroundColor: "rgba(87, 69, 69, 0.7)" }} >
                    <div className="item" style={{ backgroundImage: "url(" + '/assets/hero4.jpeg' + ")",height:"100%" }}></div>

                </div>
            </div>


        </div>
    )
}

export default index
