import React, { useState } from 'react';
import App16 from './Ex16/App16';
import App17 from './Ex17/App17';
import App18 from './Ex18/App18';
import App19 from './Ex19/App19';

// Danh sách bài tập: mỗi bài là 1 "App" riêng, đúng như đề bài.
const exercises = [
  { id: 16, label: 'Ex 16 - Event Handling', Component: App16 },
  { id: 17, label: 'Ex 17 - Render and Commit', Component: App17 },
  { id: 18, label: 'Ex 18 - State as a Snapshot', Component: App18 },
  { id: 19, label: 'Ex 19 - PropTypes', Component: App19 },
];

function App() {
  const [current, setCurrent] = useState(16);
  const { Component } = exercises.find((e) => e.id === current);

  return (
    <div className="container py-4">
      <ul className="nav nav-pills mb-4">
        {exercises.map((e) => (
          <li className="nav-item" key={e.id}>
            <button
              className={`nav-link ${current === e.id ? 'active' : ''}`}
              onClick={() => setCurrent(e.id)}
            >
              {e.label}
            </button>
          </li>
        ))}
      </ul>

      {/* key để mỗi lần đổi bài, component được tạo mới (state về ban đầu) */}
      <Component key={current} />
    </div>
  );
}

export default App;
