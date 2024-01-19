// markup for showing data
const markup = (data) => {
  let createMarkup = `
    <div class="col-lg-3 col-md-4 col-sm-6 mt-4">
      <div class="box">
        <div class="image">
          <img src="${data.img}" alt="">
        </div>
        <div class="text">
          <p><b>Name : </b>${data.name}</p>
          <p><b>Gender : </b>${data.gender}</p>
          <p><b>Age : </b>${data.age}</p>
        </div>
      </div>
    </div>
  `;

  return createMarkup;
};
