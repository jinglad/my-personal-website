import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { projectContext } from '../../../App';
import './PortfolioItem.css';

const PortfolioItem = (props) => {
    const { title, shortDescription, img_1 } = props.item;

    const [project, setProject] = useContext(projectContext);

    const handleProject = (item) => {
        setProject(item);
    }

    return (
        <div className="col-md-4 text-center mb-3">
            <div>
                <img src={img_1} className="img-box" alt="" />
            </div>
            <div className="mt-3">
                <h4>{title}</h4>
                <p className="mb-2 color-1">{shortDescription}</p>
                <Link to="/portfolioItemDetails"> <button onClick={() => handleProject(props.item)} className="btn btn-warning">Details</button></Link>
            </div>
        </div>
    );
};

export default PortfolioItem;