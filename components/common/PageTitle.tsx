import React from 'react';

type TitleProps = {
  title: string
}

const PageTitle = ({ title }: TitleProps) => (
  <div className="my-2 sm:my-4">
    <h2 className="text-gray-800 font-bold md:text-2xl text-lg">
      {title && title}
    </h2>
  </div>
);

export default PageTitle;
