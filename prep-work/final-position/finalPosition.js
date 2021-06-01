// get information from an API
​
const queensApp = {};
​
queensApp.getQueens = (seasonNum = "1") => {
  $.ajax({
    url: `http://www.nokeynoshade.party/api/seasons/${seasonNum}/queens`,
    method: "GET",
    dataType: "json",
  }).then((queensData) => {
    //run this function after data loads
    console.log(queensData);
    queensApp.displayQueens(queensData);
  });
};
​
// display queens information on the page
// use the array of queens data to generate pretty htmls on the page
queensApp.displayQueens = (queensArray) => {
  console.log(queensArray[0]);
  console.log(queensArray[0].seasons[0].seasonNumber);
​
  queensArray.forEach((queen) => {
    const htmlString = `
    <div class="queen-card">
        <h3 class="queen-title">${queen.name}</h3>
        <div class="image-container">
            <img class="queen-image" src="${queen.image_url}" alt="${queen.name}" />
        </div>
        <h4>Season: ${queen.seasons[0].seasonNumber}</h4>
    </div>`;
    $(".queen-container").append(htmlString);
  });
};
​
queensApp.init = () => {
  queensApp.getQueens();
  // get info for different seasons based on user input
  $("select").on("change", () => {
    $(".queen-container").empty();
    const selectedSeason = $("select .option:selected").val();
    queensApp.getQueens(selectedSeason);
  });
};
​
$(function () {
  queensApp.init();
});