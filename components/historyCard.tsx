import React from "react";

interface HistoryCardProps {
  name: string;
  date: string;
  right?: boolean;
}

const HistoryCard = ({ name, date, right = false }: HistoryCardProps) => {
  return (
    <div className="flex flex-row w-full divide-x-4">
      {right ? (
        <>
          <div className="flex flex-col w-1/2 items-end">
            <div className="mt-10 -mr-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
          </div>
          <div className="flex flex-col w-1/2 -z-10">
            <div className="pt-10 pl-10">
              <div className="font-bold text-[#0053a6]">{date}</div>
              {name}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-1/2">
            <div className="pt-10 text-right pr-10">
              <div className="font-bold text-[#0053a6]">{date}</div>
              {name}
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="mt-10 -ml-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default HistoryCard;
