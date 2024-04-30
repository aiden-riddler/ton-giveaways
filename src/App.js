import logo from './logo.svg';
import './App.css';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import { useTonAddress } from '@tonconnect/ui-react';
import { useTonWallet } from '@tonconnect/ui-react';

function App() {
  const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);
  return (

    <TonConnectUIProvider manifestUrl="https://sweet-heart-7938.on.fleek.co/tonconnect-manifest.json">
       <div className="App">
      <header className="App-header">
        <span>My App with React UI</span>
            <TonConnectButton />
            <div>Address</div>
            userFriendlyAddress && (
            <div>
                <span>User-friendly address: {userFriendlyAddress}</span>
                <span>Raw address: {rawAddress}</span>
            </div>

            <div>Wallet</div>
            wallet && (
            <div>
                <span>Connected wallet: {wallet.name}</span>
                <span>Device: {wallet.device.appName}</span>
            </div>
        )
        )
      </header>
    </div>
    </TonConnectUIProvider>
  );
}

export default App;
