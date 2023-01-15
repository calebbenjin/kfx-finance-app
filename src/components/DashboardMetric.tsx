import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type MetricProps = {
  title: string,
  value: number | undefined,
  icon: any,
  acctNumber?: string,
  status?: string 
}

const DashboardMetric = ({ title, acctNumber, status, value, icon }: MetricProps) => {
  return (
    <div className="bg-light-blue text-center rounded-lg shadow-lg p-6 border-t-4 border-blue">
      <p className="text-gray-600 uppercase text-md md:text-lg font-bold">
        {title}
      </p>
      <p className="text-gray-600 uppercase text-md md:text-lg font-semibold">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {acctNumber}
      </p>
      <p className="text-2xl sm:text-4xl text-blue-600 font-bold my-6">{value}</p>
      <p className="text-gray-600 uppercase text-sm md:text-md">
        Account Status: <span className="font-semibold">{status}</span>
      </p>
    </div>
  );
};

export default DashboardMetric;
