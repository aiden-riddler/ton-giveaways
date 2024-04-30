import logo from './logo.svg';
import './App.css';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';

function App() {
  return (

    <TonConnectUIProvider manifestUrl="https://sweet-heart-7938.on.fleek.co/tonconnect-manifest.json">
       <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TonConnectUIProviderAdded
        </p>
        <span>My App with React UI</span>
            <TonConnectButton />
      </header>
    </div>
    </TonConnectUIProvider>
  );
}

export default App;
