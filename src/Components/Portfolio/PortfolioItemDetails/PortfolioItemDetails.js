import React, { useContext } from 'react';
import { projectContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';

const PortfolioItemDetails = () => {

    const [project, setProject] = useContext(projectContext);
    const { title, description, technologies, img_1, img_2, img_3, img_4, img_5, website, client_side_code, server_side_code } = project;

    return (
        <div className="container">
             <Navbar></Navbar>
            <div className="row text-white mt-5">
                <div className="col-md-6">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img_1} className="d-block w-100 h-700" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img_2} className="d-block w-100 h-700" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img_3} className="d-block w-100 h-700" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img_4} className="d-block w-100 h-700" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img_5} className="d-block w-100 h-700" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <p>Technologies: {technologies}</p>
                        <div>
                            <a href={website}>Website</a><br/>
                            <a href={client_side_code}>Client Side Code</a><br/>
                            {
                                server_side_code && <a href={server_side_code}>Server Side Code</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItemDetails;