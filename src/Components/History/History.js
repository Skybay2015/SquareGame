import React from 'react';
import { useSelector } from 'react-redux';
import './styles.sass';

const History = () => {
   const rowAndCol = useSelector((state) => state.app.rowAndCol);
   return (
      <div className='history'>
         <h2 className='history__title'>Hover Squares</h2>
         {rowAndCol.length > 0
            ? rowAndCol.map((item) => {
                 return (
                    <div
                       className='history__item'
                       key={Math.random() * Date.now()}>
                       Row: {item.row} Col: {item.col}
                    </div>
                 );
              })
            : 'Move over square'}
      </div>
   );
};

export default History;
