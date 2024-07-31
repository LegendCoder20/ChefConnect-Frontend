import React from "react";

function HeaderTitle() {
  return (
    <React.Fragment>
      <header className="bg-white shadow">
        {/* <marquee behavior="" direction=""> */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight text-center text-gray">
            <span className="krona-one-regular ">
              TASTY, SIMPLE MEALS FOR
              <span className="sacramento-regular">Everyday Enjoyment</span>
            </span>
          </h1>
        </div>
        {/* </marquee> */}
      </header>
    </React.Fragment>
  );
}

export default HeaderTitle;
