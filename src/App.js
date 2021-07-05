import './App.css';

import { useEffect } from 'react';
import { fetchPresets } from './store/slices/appSlice';
import { useSelector } from 'react-redux';
import Grid from './Components/Grid';
import SelectContainer from './Components/SelectContainer';
import { useDispatch } from 'react-redux';
import History from './Components/History';

function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchPresets());
   }, []);

   const presets = useSelector((state) => state.app.presets);
   const selectedMode = useSelector((state) => state.app.selectedMode);

   return (
      <div className='App'>
         <div className='wrapper'>
            <div>
               {presets && <SelectContainer presets={presets} />}
               {selectedMode && (
                  <div className='game-container'>
                     <Grid
                        mode={selectedMode}
                        size={presets[selectedMode].field}
                     />
                     <History />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default App;
