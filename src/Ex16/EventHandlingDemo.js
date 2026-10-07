import React, { useState } from 'react';

// Exercise 16: Demo about Event Handling
const EventHandlingDemo = () => {
  // useState khởi tạo biến state count = 0
  const [count, setCount] = useState(0);

  // Event handler: được gọi khi bấm nút (onClick), tăng count lên 1
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Event Handling Demo</h1>
      <p>Count: {count}</p>
      {/* Truyền TÊN hàm (không có dấu ngoặc) cho onClick */}
      <button onClick={handleButtonClick}>Increase Count</button>
    </div>
  );
};

export default EventHandlingDemo;
