import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ image, price, title, id }) => {
  return (
    <div className="col-md-3 col-sm-6 shadow p-5">
      <div className="product-grid2">
        <div className="product-image2">
          <a href="#">
            <img className="pic-1" src={image} />
            <img className="pic-2" src={image} />
          </a>
          <ul className="social">
            <li>
              <a href="#" data-tip="Quick View">
                <i className="fa fa-eye"></i>
              </a>
            </li>
            <li>
              <a href="#" data-tip="Add to Wishlist">
                <i className="fa fa-shopping-bag"></i>
              </a>
            </li>
            <li>
              <a href="#" data-tip="Add to Cart">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
          <a className="add-to-cart" href="">
            Add to cart
          </a>
        </div>
        <div className="product-content">
          <h3 className="title">
            <Link to={`/product/${id}`}>{title}</Link>
          </h3>
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
