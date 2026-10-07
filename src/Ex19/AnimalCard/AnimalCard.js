import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

// Step 2: component nhận props và hiển thị thông tin con vật
export default function AnimalCard({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size,
  image,
}) {
  return (
    <div className="card h-100 bg-warning animal-card">
      {image && <img src={image} alt={name} className="card-img-top animal-img" />}
      <div className="card-body">
        <h4 className="card-title text-danger">{name}</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item">Scientific Name: {scientificName}</li>
          <li className="list-group-item">{size} kg</li>
          <li className="list-group-item">{diet.join(', ')}.</li>
        </ul>
        <div className="btn-wrapper">
          {/* Bấm nút -> gọi showAdditional với object additional */}
          <button className="btn btn-danger" onClick={() => showAdditional(additional)}>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

// Step 3: PropTypes - kiểm tra kiểu dữ liệu props lúc chạy (runtime)
AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.string, // tùy chọn: chỉ để hiện ảnh minh họa
};

// Step 3: defaultProps - giá trị mặc định khi prop không bắt buộc bị thiếu
// (Lion không có additional -> dùng giá trị này, nút More Info không bị lỗi)
AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};
