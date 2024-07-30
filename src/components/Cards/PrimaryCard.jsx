import React from "react";
import "../../../styles/card.css";
import DropdownList from "../Small Components/DropdownList";
import {Link} from "react-router-dom";

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
    {
      image:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
      countryFood: "American",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg",
      countryFood: "French",
    },
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
        "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
      countryFood: "American BBQ",
    },
  ];

  return (
    <React.Fragment>
      {/* <DropdownList></DropdownList> */}
      <div className="bg-lightest-grey">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 ">
          <Link to="/allRecipe">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6 ">
              {/* ////////////////////////////////////////// */}

              {cards.map((card, index) => (
                <div key={index}>
                  <a
                    className=" md:hover:opacity-60 flex flex-col h-96 "
                    href=""
                  >
                    <img
                      width="840"
                      height="1200"
                      src={card.image}
                      className="object-cover self-center w-full h-96 md:w-full md:h-full "
                      alt="dishimage"
                      data-pin-nopin="true"
                      loading="eager"
                      sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                      decoding="async"
                    />
                    <p className="relative -mt-5  px-2 sm:px-4 py-2 mx-auto text-white bg-yellow-500 text-xl  font-bold uppercase tracking-extra-widest sm:tracking-giant lg:text-base lg:px-4 lg:py-2">
                      {card.countryFood.toUpperCase()}
                    </p>
                  </a>
                </div>
              ))}
              {/* ////////////////////////////////////////// */}
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PrimaryCard;
