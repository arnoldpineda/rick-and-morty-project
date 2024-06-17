import { FC } from "react";

const Filters: FC = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <input
        type="text"
        className="w-1/2 max-w-lg p-2 border-2 border-green-500 rounded-md focus:outline-none focus:border-green-700"
        placeholder="Search..."
      />
    </div>
  );
};

export default Filters;
