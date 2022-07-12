import React,{FC} from 'react';
import DataGrid from './components/DataGrid';
import "./index.css"
import fakeData from './fakeData';
const App:FC= ()=>  {

  return (
    <div className="flex justify-center text-gray-500">
      <div className="w-[90%] flex justify-center mt-10">
        <DataGrid data={fakeData}/>
      </div>
    </div>
  );
}

export default App;
