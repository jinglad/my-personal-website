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
                <div className="col-12">
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
                <div className="col-12 mt-3 mb-5">
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <p><span className="font-weight-bold text-warning py-3">Technologies: </span> {technologies}</p>
                        <div className="mt-2">
                            <a className="btn btn-primary mr-2" target="_blank" href={website}>Website</a>
                            <a className="btn btn-primary mr-2" target="_blank" href={client_side_code}>Client Side Code</a>
                            {
                                server_side_code && <a className="btn btn-primary" target="_blank" href={server_side_code}>Server Side Code</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItemDetails;