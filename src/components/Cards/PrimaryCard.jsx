import React from "react";
import "../../../styles/primarycard.css";

function PrimaryCard() {
  const cards = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCL5gSTMU__VOwrIrU0KxOU6r3KC2JX_0rS1sOccVjJEHgIhNUuF4vVWiAoJehk6_g9Q&usqp=CAU",
      countryFood: "MOST POPULAR",
    },
    {
      image:
        "https://pipingpotcurry.com/wp-content/uploads/2019/01/Roti-Chapati-Whole-Wheat-Indian-Flatbread-5.jpg",
      countryFood: "INDIAN",
    },
    {
      image:
        "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2023/03/German-Pancakes-7.jpg?resize=1360%2C2040&ssl=1",
      countryFood: "GERMAN",
    },
    {
      image:
        "https://st4.depositphotos.com/19960896/23370/i/1600/depositphotos_233705062-stock-photo-schezwan-fried-rice-masala-popular.jpg",
      countryFood: "CHINESE",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",
      countryFood: "Italian",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/09/22/20/40/vegetables-2772736_960_720.jpg",
      countryFood: "Mediterranean",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
      countryFood: "American BBQ",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg",
      countryFood: "French",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
      countryFood: "American",
    },
  ];

  return (
    <div>
      <div className="primary-container">
        {cards.map((country, index) => (
          <div className="cards" key={index}>
            <img src={country.image} alt="" />
            <div className="country-name alegreya">
              <h4>{country.countryFood}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrimaryCard;
