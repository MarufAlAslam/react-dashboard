import React from "react";
import { VscLinkExternal } from "react-icons/vsc";
import { CiTrash } from "react-icons/ci";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: "Active Users",
      value: "104",
      date: "in Oct 2021",
    },
    {
      id: 2,
      title: "Equipment in use",
      value: "33",
      date: "in Oct 2021",
    },
    {
      id: 3,
      title: "Total Revenue",
      value: "$11,710",
      date: "in Oct 2021",
    },
  ];

  const data = [
    {
      id: 1,
      title: "Equipment Management",
      subtitle: "Quickly jump to equipment management",
    },
    {
      id: 2,
      title: "Analyses in run",
      subtitle: "Quickly jump to your analyses",
    },
  ];

  return (
    <div className="py-8 pt-zero">
      <h2 className="text-3xl font-bold">Dashboard</h2>

      <div className="flex justify-between items-start mt-5">
        <div className="w-3/4">
          <div className="flex justify-between items-start">
            {cardData.map((card) => {
              return (
                <div
                  key={card.id}
                  className="card bg-white m-2 w-1/3 rounded-md "
                >
                  <div className="card-body p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-normal">{card.title}</h3>
                        <p className="text-3xl font-bold">{card.value}</p>
                        <p className="text-gray-400 font-normal text-sm">
                          {card.date}
                        </p>
                      </div>

                      <div className="circle rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/4">
          <div className="card bg-white m-2 rounded-md w-full h-full">
            <div className="card-body px-2 py-2">
              {data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex my-2 justify-between text-left items-center"
                  >
                    <div className="circle-2 rounded-full"></div>
                    <div className="w-full">
                      <p className="text-xs ml-1 font-semibold">{item.title}</p>
                      <p className="text-xs ml-1 font-normal text-gray-400">
                        {item.subtitle.length > 18
                          ? item.subtitle.slice(0, 18) + "..."
                          : item.subtitle}
                      </p>
                    </div>
                    <a href="" className="text-xs link text-red-400">
                      <VscLinkExternal />
                    </a>
                    <button className="btn text-xs link ml-1">
                      <CiTrash />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
