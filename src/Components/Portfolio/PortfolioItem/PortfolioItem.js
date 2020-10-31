import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { projectContext } from '../../../App';
import './PortfolioItem.css';

const PortfolioItem = (props) => {
    const { title, shortDescription, img_1, website, client_side_code } = props.item;

    const [project, setProject] = useContext(projectContext);

    const handleProject = (item) => {
        setProject(item);
    }

    return (
        <div className="col-md-6 text-center text-dark mb-3">
            <div className="card">
                <img src={img_1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{shortDescription}</p>
                    <div className="mt-3">
                        <a href={website} target="_blank " className="btn btn-primary mr-2">Website</a>
                        <a href={client_side_code} target="_blank" className="btn btn-primary mr-2">Github</a>
                        <Link onClick={() => handleProject(props.item)} className="text-decoration-none text-dark" to="/portfolioItemDetails"><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;