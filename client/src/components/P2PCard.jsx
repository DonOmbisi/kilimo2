import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function P2PCard({ id, title, image, price, user, quantityLeft }) {

  return (
    <div className="card h-[350px] bg-[#283e2f] text-[#e0fce7] w-96 shadow-xl rounded-lg overflow-hidden">
      <figure className="h-[60%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full bg-lime-700"
        />
      </figure>

      <div className="card-body p-2 flex flex-col justify-between h-[40%]">
        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex justify-between">
              <h5 className="text-xs text-gray-300"> By {user}</h5>
              {/* <h5 className="text-sm text-gray-300">
              {" "}
              {city}, {state}
            </h5> */}
            </div>
          </div>

          <div className="flex items-center">
            <div
              className="radial-progress text-[#43d854] w-[50px] h-[50px] font-bold"
              style={{
                "--value": `${Math.floor(quantityLeft)}`,
                "--size": "50px",
                "--thickness": "4px",
              }}
              role="progressbar"
            >
              {quantityLeft.toFixed(0)}
            </div>
            {/* <QuantityCircle quantity={quantity} quantityLeft={quantityLeft} /> */}
            <span className="ml-2">Left</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 pb-2">
          <h3 className="text-md font-bold ml-2">$ {price} / Quintal</h3>

          <Link to={`/listing/${id}`}>
            <button className="btn btn-success bg-[#778457] border-0 text-white text-sm py-1 px-3 rounded-md">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

P2PCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  quantityLeft: PropTypes.number.isRequired,
};

export default P2PCard;
