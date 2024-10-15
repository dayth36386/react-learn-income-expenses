import { useEffect, useState } from 'react';
import './App.css';
import Formcomponent from './components/Formcomponent';
import Transaction from './components/Transaction';
import DataContext from './components/data/DataContext';
import Datastate from './components/Datastate';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [items, setitem] = useState([]);
  const [ReportIncome, setReportIncome] = useState(0);
  const [ReportExpenses, setReportExpenses] = useState(0);
  const clickForm = (newitems) => {
    setitem((prevItem) => {
      return [newitems, ...prevItem]
    })
  }
  useEffect(() => {
    const amounts = items.map((item) => {
      return item.amount
    });
    const income = amounts.filter(el => el > 0).reduce((total, el) => total += el, 0)
    const expenses = (amounts.filter(el => el < 0).reduce((total, el) => total += el, 0)) * -1
    setReportExpenses(expenses.toFixed(2));
    setReportIncome(income.toFixed(2));
  }, [items]);
  const contextValues = {
    items,
    ReportExpenses,
    ReportIncome
  };
  // const [stateShow,setsteteShow] = useState(false);
  // const reducer =(state,action)=>{
  //   switch (action.type) {
  //     case 'SHOW':
  //         return setsteteShow(true);
  //     case 'HIDE':
  //         return setsteteShow(false);
  //   }
  // }
  // const [result, dispatch] = useReducer(reducer,setsteteShow);
  return (
    <DataContext.Provider value={contextValues}>
      <div className="App">
        <h1>Income and expenses program</h1>
        <Router>
          <div>
            <Routes>
              <Route path='/' element={<Datastate/>}></Route>
            </Routes>
          </div>
          <ul className='horizontal-menu'>
              <li><Link to="/">ข้อมูลบัญชี</Link></li>
              <li><Link to="/insert">บันทึกข้อมูล</Link></li>
            </ul>
            <Routes>
              <Route path='/insert' element={<><Formcomponent adddata={clickForm} />
              <Transaction/></>}></Route>
            </Routes>
        </Router>
      </div>
      {/* <button onClick={()=>dispatch({type:'SHOW',payload:true})}>Show</button>
      <button onClick={()=>dispatch({type:'HIDE',payload:false})}>HIDE</button> */}
    </DataContext.Provider>
  );
}
export default App;
