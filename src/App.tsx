import { useState } from 'react';

import { Test } from './Test';

function App() {
  const [c, setC] = useState(0);

  return (
    <>
      <div>
        <Test />
      </div>
    </>
  );
}

export default App;
