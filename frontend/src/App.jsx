import { BrowserRouter} from "react-router-dom";
import Header from "./components/header/index_header";
import Banner from "./components/banner/index_banner";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
         <Banner />
        
      </main>
    </BrowserRouter>
  );
}
export default App;

