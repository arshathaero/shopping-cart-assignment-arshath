import './App.scss';
import Router from 'router/router'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
function App() {
  return (<section>
    <Header/>
    <main className='main'>
    <Router />
    </main>
    <Footer/>
    </section>)
}

export default App;
