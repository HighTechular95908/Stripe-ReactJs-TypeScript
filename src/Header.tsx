import './App.css';

const Header = () => {
    return (
        <header style={{ padding: 0, position: 'relative', backgroundColor: 'white', width: '100%' }}>
        <img src="2.png" alt="back" style={{ width: '100%' }} />
        <img alt="Talysis Logo" src="logo1.png" style={{ width: '20vw', position: 'absolute', top: '20px', left: '20px' }} />
        <h1 className="" style={{ position: 'absolute', top: '6vw', color: 'white', right: '5vw', textShadow: '2px 2px 4px #000000', fontSize: '3.5vw' }}>Where there's <span style={{ color: '#A0522D' }}>Muck</span>, there's <span style={{ color: '#FFD700' }}>Money!</span></h1>
        <h3 style={{ position: 'absolute', top: '12.5vw', right: '10vw', textShadow: '2px 2px 4px #000000', fontSize: '2.5vw', color: '#DAA520' }}>Talysis Fundraising Event - Win <span style={{ fontSize: '2.6vw', color: '#FFD700', textDecoration: 'underline' }}>£2,000</span></h3>
        <a id="newBuyBtn" href="/buy">Buy Now</a>
      </header>
    )
}

export default Header;