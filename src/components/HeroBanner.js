import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroBanner = () => {
    return (
        <div
            style={{
                backgroundColor: '#FAF3E0',
                display: 'flex',
                justifyContent: 'center',
                padding: '40px 0'
            }}
        >
            <div
                style={{
                    width: '80%',
                    maxWidth: '1000px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px #fbeecaff'
                }}
            >
                <Carousel>
                    <Carousel.Item style={{ height: '500px' }}>
                        <img
                            className="d-block w-100"
                            src="/images/ban1.jpg"
                            alt="Polki Bridal Necklace Set"
                            style={{
                                height: "500px",
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0,0,0,0.4)", 
                                zIndex: 1
                            }}
                        ></div>
                        <Carousel.Caption style={{ zIndex: 2 }}>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#ffffffff' }}>
                                Zivara
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', color: '#ffffffff' }}>
                                Discover a world of beautiful handcrafted designs
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: '500px' }}>
                        <img
                            className="d-block w-100"
                            src="/images/ban2.jpg"
                            alt="Wedding Collection"
                            style={{
                                height: "500px",
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0,0,0,0.4)", 
                                zIndex: 1
                            }}
                        ></div>
                        <Carousel.Caption  style={{ zIndex: 2 }}>
                            <h3 style={{ fontFamily: 'Playfair Display, serif'}}>Fusion Necklace Collection</h3>
                            <p  style={{ fontFamily: 'Playfair Display, serif'}}>Modern fusion designs blending tradition and style</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: '500px' }}>
                        <img
                            className="d-block w-100"
                            src="/images/ban3.jpg"
                            alt="Rings"
                            style={{
                                height: "500px",
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0,0,0,0.4)", 
                                zIndex: 1
                            }}
                        ></div>
                        <Carousel.Caption  style={{ zIndex: 2 }}>
                            <h1 style={{ color: '#fff' ,fontFamily: 'Playfair Display, serif'}}>Diamond Sets</h1>
                            <p  style={{ fontFamily: 'Playfair Display, serif'}}>Luxury necklaces for weddings and grand occasions</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: '500px' }}>
                        <img
                            className="d-block w-100"
                            src="/images/ban4.jpg"
                            alt="Wedding"
                            style={{
                                height: "500px",
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0,0,0,0.4)", 
                                zIndex: 1
                            }}
                        ></div>
                        <Carousel.Caption  style={{ zIndex: 2 }}>
                            <h1 style={{ color: '#fff',fontFamily: 'Playfair Display, serif' }}>Exclusive Bridal Jewelry</h1>
                            <p  style={{ fontFamily: 'Playfair Display, serif'}}>Handpicked premium collections for your special day</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default HeroBanner;
