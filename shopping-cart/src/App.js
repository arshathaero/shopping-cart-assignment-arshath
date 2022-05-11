import "./App.scss";
import Router from "router/router";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import {useLocation} from 'react-router-dom'
function App() {
  const location = useLocation()
  return (
    <section >
      <Header />
      <main className="main">
        <Router />
      </main>
      {location.pathname != '/cart' && <Footer />}
    </section>
  );
}

export default App;
