// import { useState } from 'react'
// import AppLayout from './components/Layout/AppLayout'
// import VisualPanel from './components/Layout/VisualPanel'
// import FormPanel from './components/Layout/FormPanel'
// import { AppContextProvider } from './context/appContext'
// import { ApolloProvider, useQuery } from '@apollo/client';
// import client from './services/ApolloClient'; 

// import '@fontsource/poppins'


// function App() {
//   const [count, setCount] = useState(0)
//   const [isVisualExpanded, setIsVisualExpanded] = useState(false);

//   return (
//     <AppContextProvider>
//       <AppLayout 
//         visualPanel={<VisualPanel setIsVisualExpanded={setIsVisualExpanded} isVisualExpanded={isVisualExpanded} />} 
//         formPanel={<FormPanel/>}
//         isVisualExpanded={isVisualExpanded}
//       />
        
//     </AppContextProvider>  
//   )
// }

// export default App


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