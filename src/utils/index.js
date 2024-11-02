import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");
  //   console.log(all);
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};

// add coffee to local storage
const addFavorite = (coffee) => {
  //   console.log(coffee);
  const favorites = getAllFavorites();
  //   console.log(favorites);
  const isExist = favorites.find((item) => item.id === coffee.id);
  if (isExist) {
    return toast.error("already exist");
  }
  favorites.push(coffee);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("added successfully");
};

// remove coffee from local storage
const removeFavorite = (id) => {
  const favorites = getAllFavorites();
  const remaining = favorites.filter((item) => item.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.error("deleted successfully");
};

export { addFavorite, getAllFavorites, removeFavorite };
