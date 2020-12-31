import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus>hello</Button>
        <Button btnType={ButtonType.Default} disabled>hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">hello</Button>

        <h1>hello</h1>
        <h2>hello</h2>
        <h3>hello</h3>
        <code>const a=1</code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
