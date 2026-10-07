import React, { useState } from 'react';

// Exercise 17: Demo about Render and Commit
const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  // Bấm nút -> setCount -> (1) TRIGGER render -> (2) RENDER: React gọi lại
  // component này -> (3) COMMIT: React chỉ cập nhật phần DOM thay đổi (số Count)
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Render and Commit Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default RenderAndCommitDemo;
