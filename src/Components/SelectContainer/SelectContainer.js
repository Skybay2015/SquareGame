import React, { useCallback, useState } from 'react';
import Select from 'react-select';
import { setSelectedMode, resetHistory } from '../../store/slices/appSlice';
import { useDispatch } from 'react-redux';
import { createOptions } from '../../helpers';
import './styles.sass';

const SelectContainer = ({ presets }) => {
   const dispatch = useDispatch();
   const [mode, setMode] = useState(null);

   const handleChange = (option) => {
      setMode(option.value);
   };

   const handleClick = (mode) => {
      dispatch(setSelectedMode(mode));
      dispatch(resetHistory());
   };

   const memoizedCreateOptions = useCallback(
      () => createOptions(presets),
      [presets],
   );

   return (
      <div className='select-container'>
         <Select
            className='select'
            onChange={handleChange}
            options={memoizedCreateOptions()}
         />
         <button className='select__button' onClick={() => handleClick(mode)}>
            START
         </button>
      </div>
   );
};

export default SelectContainer;
