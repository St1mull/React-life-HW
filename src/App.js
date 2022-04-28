import Header from "./Components/Header/Header";
import ContactContextProvider from "./Context/ContactContext";
import MainRoutes from "./routes/MainRoutes";




function App() {
  return (
    <div>
      <ContactContextProvider>
      <Header/>
      <MainRoutes/>

      </ContactContextProvider>
    </div>
  );
}

export default App;
