import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-between mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`p-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`p-2 ${filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={`p-2 ${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterBar;
