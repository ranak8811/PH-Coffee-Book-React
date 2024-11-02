import { Link, useLocation } from "react-router-dom";
import { IoTrashBinSharp } from "react-icons/io5";
/* eslint-disable react/prop-types */
const Card = ({ coffee, handleRemove }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  const { pathname } = useLocation();

  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>

      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute -top-5 -right-5 text-red-600 cursor-pointer border border-blue-600 rounded-full p-2"
        >
          <IoTrashBinSharp size={30}></IoTrashBinSharp>
        </div>
      )}
    </div>
  );
};

export default Card;
