import React from 'react';

const AboutSection = () => {
    return (
        <div className="bg-smoke position-relative overflow-hidden space" id="about-sec"
            data-bg-src="/img/bg/shape_bg_1.png" style={{ backgroundImage: "url(/img/bg/shape_bg_1.png)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-box4 space-bottom">
                            <div className="img1">
                                <img src="/images/mumbaicab.png" alt="About" />
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="ps-xl-5">
                            <div className="title-area">
                                <span className="sub-title style1">Let’s Go Together</span>
                                <h2 className="sec-title">Begin Your Travel Story with Us</h2>
                                <p className="sec-text mb-30">
                                    There are many variations of passages of available but the majority have suffered alteration in some form,
                                    by injected hum randomised words which don't look even slightly.
                                </p>
                            </div>
                            <div className="about-item-wrap">
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/img/icon/map3.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">Exclusive Trip</h5>
                                        <p className="about-item_text">
                                            There are many variations of passages of available but the majority.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/img/icon/guide.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">Professional Guide</h5>
                                        <p className="about-item_text">
                                            There are many variations of passages of available but the majority.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-35">
                                <a href="/about-us" className="th-btn style3 th-icon">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-mockup d-none d-xxl-block" data-bottom="0%" data-right="0%">
                <img src="/img/normal/about-slide-img2.png" alt="" />
            </div>
        </div>
    );
};

export default AboutSection;
