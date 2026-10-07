# React Exercises 16 - 19

Một project Create React App chứa 4 bài tập. Dùng menu phía trên trang để chuyển bài.

## Chạy

    npm install
    npm start        # mở http://localhost:3000

> Project dùng **React 18.2.0** (cố định). Ex 19 dùng `propTypes` và `defaultProps`
> trên function component; React 19 đã bỏ cả hai nên sẽ không báo lỗi PropTypes.
> Nếu tự tạo project bằng `npx create-react-app`, hãy chạy thêm:
>
>     npm install react@18.2.0 react-dom@18.2.0 prop-types@15.8.1 bootstrap

## Cấu trúc (mỗi thư mục = một bài, bố cục giống đề)

    src/
    ├── index.js, App.js            menu chọn bài
    ├── Ex16/  App16.js, EventHandlingDemo.js
    ├── Ex17/  App17.js, Component/RenderAndCommitDemo.js
    ├── Ex18/  App18.js, Component/SnapshotDemo.js
    └── Ex19/  App19.js, data.js, AnimalCard/AnimalCard.js + .css

## Bài tập ↔ lý thuyết

| Bài | Nội dung | Slide |
|---|---|---|
| 16 | `onClick` + `handleButtonClick` | Event Handling (Slot 11_12) |
| 17 | setState → trigger → render → commit | Render and Commit |
| 18 | state là snapshot: `count` + `snapshot` | State as a Snapshot |
| 19 | `PropTypes`, `isRequired`, `shape`, `arrayOf`, `defaultProps` | Slot 13 |

## Cách tự kiểm tra Ex 19

1. Bấm **More Info** ở Lion → alert "notes: No Additional Information" (nhờ `defaultProps`).
2. Bấm **More Info** ở Zebra → alert 2 dòng `notes` và `link`.
3. Mở `src/Ex19/data.js`, đổi `size: 140` thành `size: '140'`, lưu, mở Console (F12)
   → thấy cảnh báo `Invalid prop 'size' of type 'string'`. Nhớ đổi lại thành số.

## Thay ảnh động vật

Ảnh hiện là hình minh họa SVG trong `public/images/`. Muốn dùng ảnh thật, đặt
`lion.jpg`, `gorilla.jpg`, `zebra.jpg` vào đó và đổi `.svg` thành `.jpg` trong `src/Ex19/App19.js`.
