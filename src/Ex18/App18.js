import React from 'react';
// Lưu ý: đề viết "import './Component/SnapshotDemo'" (thiếu tên) nên
// <SnapshotDemo /> sẽ lỗi "not defined". Phải import default như dưới đây.
import SnapshotDemo from './Component/SnapshotDemo';

function App() {
  return (
    <React.StrictMode>
      <SnapshotDemo />
    </React.StrictMode>
  );
}

export default App;
