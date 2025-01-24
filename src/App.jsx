import { useState, useEffect } from 'react';
import AppLayout from './components/Layout/AppLayout';
import VisualPanel from './components/Layout/VisualPanel';
import FormPanel from './components/Layout/FormPanel';
import { AppContextProvider } from './context/appContext';
// import { gql, useQuery } from '@apollo/client';

import '@fontsource/poppins';


function App() {
  const [isVisualExpanded, setIsVisualExpanded] = useState(false);

  return (
    <AppContextProvider>
      <AppLayout
        visualPanel={
          <VisualPanel
            setIsVisualExpanded={setIsVisualExpanded}
            isVisualExpanded={isVisualExpanded}
          />
        }
        formPanel={<FormPanel />}
        isVisualExpanded={isVisualExpanded}
      />
    </AppContextProvider>
  );
}

export default App;