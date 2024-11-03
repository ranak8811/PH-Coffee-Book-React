import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const loadedCoffees = useLoaderData();
  //   console.log(loadedCoffees);
  const { category } = useParams();
  //   console.log(category);
  const [coffees, setCoffees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...loadedCoffees].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(loadedCoffees.slice(0, 6));
    }
  }, [category, loadedCoffees]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>

      <button className="btn btn-warning" onClick={() => navigate("/coffes")}>
        View All
      </button>

      {/* if i want to show all the coffee cards below the slice cards */}
      {/* <button
        className="btn btn-warning"
        onClick={() => setCoffees(loadedCoffees)}
      >
        View All
      </button> */}
    </>
  );
};

export default CoffeeCards;
