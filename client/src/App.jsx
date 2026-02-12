import './App.css'

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          
          {/* Left - Brand */}
          <div className="brand">
            <h1 className="logo">OMSIM</h1>
          </div>

          {/* Right - Navigation */}
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>

            <button className="icon account">Account</button>
            <button className="icon search">Search</button>
            <button className="icon cart">Cart</button>
          </nav>

          {/* Search Bar */}
          <div className="search-layer">
            <input
              type="search"
              placeholder="Search Products..."
              className="search-input"
            />

            <button className="search-close">X</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">

      </main>
      
      {/* Footer */}
      <footer className="footer">

      </footer>

    </div>
  );
}

export default App
