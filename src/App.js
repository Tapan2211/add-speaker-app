import React, { useState } from 'react';
import SpeakerSidebar from './component/SpeakerSidebar';
import './styles/sidebar.scss';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="App">


      {/* Conditionally render the Add Speaker button */}
      {!isSidebarOpen && (
        <div>
          <p>Add Speaker</p>
          <button onClick={openSidebar} className="add-speaker-button">
            Add Speaker
          </button>
        </div>
      )}

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay"></div>}

      <SpeakerSidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
