import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      {/* SECTION 1 */}
      <div className="bg-red-300">
        <div className="bg-red-400">
          <div className="container mx-auto pl-3 pr-3 pt-6 pb-6 flex space-x-2  overflow-x-auto">
            <div className="flex space-x-2">
              <div>Explore:</div>
              <div className="font-bold underline">Shoes</div>
              <div className="font-bold underline">Clothing</div>
              <div className="font-bold underline">Accessories</div>
              <div className="font-bold underline">Premium</div>
              <div className="font-bold underline">Sport</div>
              <div className="font-bold underline">Shop All</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
