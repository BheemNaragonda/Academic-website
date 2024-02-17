
fetch('https://dogs-care.onrender.com/api/dogs_care')
  .then(response => response.json())
  .then(data => {
    const dogCareDataElement = document.getElementById('dogCareData');
    if (data && data.length > 0) {
        console.log(data)
      let textTitleEl=document.getElementById('textTitle');
      textTitleEl.textContent=data[0].text_title
      let textSummaryEl=document.getElementById('textSummary');
      textSummaryEl.textContent=data[0].text_summary
      let bannerSubImageEl =document.getElementById('bannerSubImage');
      bannerSubImageEl.src=data[0].image1
      let bottomImageEl =document.getElementById('bottomImage');
      let rightImageEl =document.getElementById('rightImage');
      let leftImageEl =document.getElementById('leftImage');
      let topImageEl =document.getElementById('topImage');
      bottomImageEl.src=data[0].image2
      rightImageEl.src=data[0].image5
      leftImageEl.src=data[0].image4
      topImageEl.src=data[0].image3
    } else {
      dogCareDataElement.textContent = 'No data available';
    }
  })
  .catch(error => {
    const dogCareDataElement = document.getElementById('dogCareData');
    dogCareDataElement.textContent = 'error at fetching data';
  });
