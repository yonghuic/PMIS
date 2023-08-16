import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Introduction from './components/Introduction/Introduction';
import Construction from './components/Construction/Construction';
import Public from './components/Public/Public';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className='h-screen bg-[#fff8ea]'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>                     {/*首頁*/}
                    <Route path='/introduction' element={<Introduction />}/> {/*計畫簡介*/}
                    <Route path='/construction' element={<Construction />}/> {/*施工影像*/}
                    <Route path='/public' element={<Public />}/>             {/*公開資訊*/}
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
