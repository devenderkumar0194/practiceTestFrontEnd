const ProductCard = (props) => {
    
    return <>
        <div className="col-sm-4 prod-card">
            <div className="prod-inner">
                <h3>{props.product.name}</h3>
                <p>Lorem ipsum dolor sit amet</p>

                <div className="prod-img">
                { props.product.image ?  <img src={`http://localhost:5000/uploads/${props.product.image}`} alt="Uploaded" width="100%" />
                    : "" }
                </div>

                <div className="prod-pay my-2">
                 <a href="/" className="btn btn-primary">{props.product.price}</a>
                </div>

            </div>
            
        </div>
    </>;
}

export default ProductCard;