import React from "react";
import { BsStar } from "react-icons/bs";

type Props = {
  text: string;
};

export default function RecherchePost({ text }: Props) {
  return (
    <div>
      <div className="pb-10 no-scrollBar">
        <div className="grid grid-cols-4 gap-8">
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
