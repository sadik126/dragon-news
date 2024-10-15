import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">All categories</h2>
      {categories.map((category) => (
        <Link
          key={category.id}
          className="block ml-4 font-semibold px-4"
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Leftsidenav;
