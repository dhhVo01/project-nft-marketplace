import { Link } from "react-router-dom";


function Card(props) {


    return (
        <div className="col">
            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={props.img} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                    <p className="card-text">Name: <Link to={"/detail/" + props.id}>{props.name}</Link></p>
                    <p className="card-text">Name: {props.name}</p>
                    <p className="card-text">Address: {props.address}</p>
                    { props.myNFT == false && <p className="card-text">Price: {props.price}</p>}
                    {/* <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Card;