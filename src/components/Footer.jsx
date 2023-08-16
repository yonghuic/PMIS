import logo from '../images/logo.png';

const Footer = () => {
    const numbercss = {
        fontFamily:"Mochiy Pop One", 
        fontSize:"0.75rem"
    }
  return (
    <>
        <footer className="footer p-10 bg-[#fff3da] text-base-content">
            <div className="font-['Stick']">
                <img className="object-contain max-w-[140px] ml-[-43px]" src={logo} alt="logo" />
                <p>嘉皓營造有限公司<br/>成立於民國<span style={numbercss}>86</span>年</p>
            </div> 
            <div className="font-['Stick']">
                <span className="footer-title text-lg">營業項目</span> 
                <a className="link link-hover" href='##'>土木工程</a> 
                <a className="link link-hover" href='##'>道路工程</a> 
                <a className="link link-hover" href='##'>養護工程</a> 
            </div> 
            <div>
                <span className="footer-title font-['Stick'] text-lg">聯絡資訊</span> 
                <a className="link link-hover font-['Stick']" href='##'>桃園市中山路<span style={numbercss}>123</span>號</a> 
                <a className="link link-hover text-xs" href='##'>03-1234567</a> 
                <a className="link link-hover text-xs" href='##'>03-1235892</a>
                <a className="link link-hover text-xs" href='##'>jiahiocompany@gmail.com</a> 
            </div> 
        </footer>
    </>
  )
}

export default Footer