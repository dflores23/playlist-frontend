import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"



function App() {
  console.log(process.env)
  return (
    <div className="App">
      
      <Header />
      <Main />
     {/* <Footer />
     <SideBar /> */}
     
    </div>
  );
}

export default App;

