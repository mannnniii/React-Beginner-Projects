import React, { useState, useEffect } from 'react'
import "./style.css"
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

function Meal() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        const mealsWithIds = res.data.meals.map(meal => ({
          ...meal,
          id: uuidv4()
        }));
        setItems(mealsWithIds);
        console.log(mealsWithIds);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal, id }) => {
    return (
      <section className="card" key={id}>
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>

    )
  })

  return <div className="items-container">
    {itemsList}
  </div>

}

export default Meal
