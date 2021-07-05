import React, { useMemo } from 'react';
import GridItem from '../GridItem';
import { createGrid } from '../../helpers';

import './styles.sass';

const Grid = ({ size }) => {
   const grid = useMemo(() => createGrid(size), [size]);

   const handleMouseEnter = (e) => {
      e.target.style.background = '#000';
   };

   return (
      <div className='grid'>
         {grid.map((row, rowId) => {
            return (
               <div key={Math.random() * Date.now()} className='grid__row'>
                  {row.map((_, colId) => {
                     return (
                        <GridItem
                           key={Math.random() * Date.now()}
                           rowId={rowId}
                           colId={colId}
                           mouseEnterHandler={handleMouseEnter}
                        />
                     );
                  })}
               </div>
            );
         })}
      </div>
   );
};

export default Grid;
