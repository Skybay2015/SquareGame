import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRowAndCol } from '../../store/slices/appSlice';
import './styles.sass';

const GridItem = ({ colId, rowId }) => {
   const [isActive, setIsActive] = useState(false);
   const dispatch = useDispatch();
   const mouseEnterHandler = () => {
      if (!isActive) {
         dispatch(
            setRowAndCol({
               row: rowId + 1,
               col: colId + 1,
            }),
         );
      }

      setIsActive((prev) => !prev);
   };

   return (
      <div
         onMouseEnter={mouseEnterHandler}
         className={
            isActive ? 'grid__item--active grid__item' : 'grid__item'
         }></div>
   );
};

export default GridItem;
