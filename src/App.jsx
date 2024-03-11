import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Pages/Products"; 
import Orders from "./components/Pages/Orders";
import Customers from "./components/Pages/Customers";
import Transactions from "./components/Pages/Transactions";
import Messages from "./components/Pages/Messages";
import Settings from "./components/Pages/Settings";
import HelpAndSupport from "./components/Pages/HelpAndSupport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='customers' element={<Customers/>}/>
          <Route path='transactions' element={<Transactions/>}/>
          <Route path='messages' element={<Messages/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='support' element={<HelpAndSupport/>}/>
        </Route>
        <Route path="login" element={<div>this is login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
