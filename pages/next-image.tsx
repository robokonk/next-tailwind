import { NextPage } from "next";
import Image from "next/image";
import { Menu } from "../components/Menu";

const Home: NextPage = () => {
  return (
    <>
      {/* header */}
      <div className="bg-red-500">
        <div className="container mx-auto my-auto px-4 pl-3 pr-3 pt-8 pb-8">
          <div className="flex justify-between">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <div className="font-bold">SMPLX</div>
            </div>
            <div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 1 */}
      <div className="bg-red-300">
        <div className="container p-3 mx-auto">
          <div className="grid gap-4  md:grid-cols-2">
            <div className="grid  gap-4 place-content-between">
              <div className="">
                <div className="text-4xl font-bold pt-3">
                  Until Wednesday only Get
                </div>
                <div className="text-2xl"> an extra 10% off</div>
              </div>
              <div className="">
                <div className="font-bold">Code: xyz100</div>
                <div>Save now -&gt;</div>
              </div>
            </div>
            <div className="flex md:justify-end md:container  mx-auto">
              {/* <Image
                src="https://images.pexels.com/photos/1230679/pexels-photo-1230679.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Picture of the author"
                width="400px"
                height="300px"
              /> */}
              <div className="relative h-64 w-96">
                <Image
                  src="https://images.pexels.com/photos/1230679/pexels-photo-1230679.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Picture of the author"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                />
              </div>
            </div>
          </div>
        </div>
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
      {/* SECTION 2 */}
      <div className="bg-gray-100 mt-12">
        <div className="container p-3 mx-auto">
          <div className="grid gap-4  md:grid-cols-2">
            <div className="grid  gap-4 place-content-between">
              <div className="">
                <div className="text-4xl font-bold pt-12">Levis 501</div>
                <div className="text-2xl"> Black & White</div>
                <div>Save now -&gt;</div>
              </div>
            </div>
            <div className="flex justify-end mx-auto sm:container">
              {/* <Image
                src="https://images.pexels.com/photos/1230679/pexels-photo-1230679.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Picture of the author"
                width="400px"
                height="300px"
              /> */}
              <div className="relative h-64 w-96">
                <Image
                  src="https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Picture of the author"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      {/* FOOTER */}
    </>
  );
};

export default Home;
