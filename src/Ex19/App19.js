import React from 'react';
import AnimalCard from './AnimalCard/AnimalCard';
import data from './data';

// Chuyển object additional -> mảng cặp [key, value] -> chuỗi "key: value"
// -> nối bằng xuống dòng (\n) -> hiển thị bằng alert
function showAdditionalData(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation);
}

function App19() {
  return (
    <div>
      <h1 className="text-center mb-4">Animals</h1>
      <div className="row">
        {data.map((animal) => (
          <div className="col-md-4 mb-4" key={animal.name}>
            <AnimalCard
              {...animal}
              showAdditional={showAdditionalData}
              image={`${process.env.PUBLIC_URL}/images/${animal.name.toLowerCase()}.svg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App19;
