import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

// TIP: preffer named/non-default exports - typescript will give you nice import suggestions
// TIP: arrow functions

// TIP: React.FC to to samo co React.FunctionalCommponent
export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
