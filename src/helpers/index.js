export const createOptions = (presets) => {
   const options = [];
   for (const key in presets) {
      const option = {
         value: key,
      };

      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {
         return str.toUpperCase();
      });
      option.label = label;
      options.push(option);
   }
   return options;
};

export const createGrid = (size) => {
   const grid = [];
   for (let row = 0; row < size; row++) {
      const currentRow = [];
      for (let col = 0; col < size; col++) {
         currentRow.push(0);
      }
      grid.push(currentRow);
   }

   return grid;
};
