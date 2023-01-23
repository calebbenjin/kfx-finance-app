import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


type MetricProps = {
  title: string,
  value: number | undefined,
  icon: any,
  acctNumber?: string,
  status?: string 
}

const DashboardMetric = ({ acctNumber, value }: MetricProps) => {
  const [ hideBalance, setHideBalance] = useState(true)

  const handleHideBalance = () => {
    setHideBalance(!hideBalance)
  }

  return (
    <div className="bg-white mx-auto heroMetrics text-left rounded-lg shadow-lg py-6 px-6  sm:px-8 border-t-4 border-blue">
      <div>
        <div className="flex items-center justify-between w-full">
          <p className="text-gray-600 capitalize text-sm md:text-lg font-semibold">
            Avaiable Balance
          </p>
          <p className="text-gray-600 capitalize text-sm md:text-lg font-semibold">
            {acctNumber}
          </p>
        </div>
        <div className="flex items-center justify-between w-full pt-2">
          <p className="text-3xl dark:text-gray-900 sm:text-4xl text-blue-600 font-semibold my-2">{hideBalance ? value : acctNumber}</p>
          <button className="text-4xl" onClick={handleHideBalance}>{!hideBalance ? <AiOutlineEye />  : <AiOutlineEyeInvisible />}</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardMetric;
