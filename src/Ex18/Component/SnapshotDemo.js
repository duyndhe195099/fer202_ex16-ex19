import React, { useState } from 'react';

// Exercise 18: Demo about State as a Snapshot
const SnapshotDemo = () => {
  // count    : giá trị đếm hiện tại
  // snapshot : "bản chụp" của count tại thời điểm bấm Take Snapshot (null = chưa chụp)
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  // Tăng count lên 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Chụp lại giá trị count hiện tại vào snapshot
  const handleSnapshot = () => {
    setSnapshot(count);
  };

  // Khôi phục count từ snapshot, chỉ khi đã có snapshot
  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div>
      <h1>State as a Snapshot Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleSnapshot}>Take Snapshot</button>
      <button onClick={handleRestore}>Restore Snapshot</button>
    </div>
  );
};

export default SnapshotDemo;
