import React, { useState } from 'react';

import Categories from './Categories';
import items from './data';


function App() {
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories  items = {items}/>
  
      </section>
    </main>
  );
}

export default App;