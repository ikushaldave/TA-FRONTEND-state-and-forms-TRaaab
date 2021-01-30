import React from "react";
import PropTypes from "prop-types";
import foodMenu from "../data/data.json";

function Food (props) {
  const filteredFood = foodMenu.filter((food) => {
    if (props.selected === "all") {
      return true
    } else {
      return props.selected === food.category
    }
  });

  return (
		<section className="container flex justify-evenly flex-wrap m-4">
			{filteredFood.map((food) => (
				<div className="flex justify-between flex-wrap sm:w-6/12 md:w-5/12 lg:w-3/12 m-4" key={food.id}>
					<img src={food.img} className="object-cover w-4/12 p-1" alt={food.title} />
					<div className="w-8/12 p-1">
						<div className="flex justify-between flex-wrap border-b-2 border-yellow-700 pb-2">
							<h2>{food.title}</h2>
							<h3 className="text-yellow-700">{`$${food.price}`}</h3>
						</div>
						<p className="pt-2">{food.desc}</p>
					</div>
				</div>
			))}
		</section>
  );
}

export default Food;