import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
