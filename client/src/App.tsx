import React,{FC} from 'react';
import DataRow from './components/DataRow';
import "./index.css"

const App:FC= ()=>  {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] flex justify-center mt-10">
        <table className="flex w-full rounded-lg flex-col border-[1px] border-gray-400"> 
          <DataRow heading/>
          <DataRow/>

        </table>
      </div>
    </div>
  );
}

export default App;
