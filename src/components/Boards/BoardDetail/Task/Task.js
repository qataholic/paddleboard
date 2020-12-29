import React from 'react';
import IconButton from '../../../../common/Buttons/IconButton';
import { ReactComponent as ThreeDots } from '../../../../assets/img/icons/three-dots-24.svg';

const Task = ({ name, description, category }) => {
  const getCategoryStyles = () => {
    switch (category) {
      case 'Product Documentation':
        return 'text-pink-800 bg-pink-100';
      case 'Design':
        return 'text-indigo-800 bg-indigo-100';
      case 'Backend':
        return 'text-amber-800 bg-amber-100';
      case 'Feature Request':
      default:
        return 'text-orange-800 bg-orange-100';
    }
  };

  return (
    <div className="p-4 my-2 bg-white border border-gray-200 rounded-sm hover:border-gray-300 cursor-grab">
      <div className="flex flex-col">
        <div className="flex flex-row items-end justify-between">
          <p className="text-sm font-medium text-gray-700">{name}</p>
          <IconButton backgroundType="white">
            <ThreeDots title="menu-icon" className="w-5 h-5 mx-auto" />
          </IconButton>
        </div>
        <div className="mr-8">
          <p className="text-xs font-light text-gray-400 leading-4">{description}</p>
        </div>
        <div className="flex flex-row items-center justify-between mt-2">
          <img
            className="inline-block w-6 h-6 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className={`px-2 text-xs font-semibold rounded-full ` + getCategoryStyles()}>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
