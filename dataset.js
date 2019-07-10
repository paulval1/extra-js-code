/*
In frontend development, data attributes are a pretty handy way to inject values in your HTML
 that you can easily access in your JS.
In this challenge, we write a function that parses an HTML tag and extracts its data attributes
into an Object.
Implement the dataset function which takes one element parameter (of type String) and returns
an Object with the right keys and values:



    dataset(burger);
    // => { id: 42, price: 15, category: 'popular' }

It should only return the dataset of the wrapping element regardless of its children
It should cast the values to the right type (in the example, 42 and 15 should be numbers)

Don't forget to use Chrome DevTools to debug!

*/

const dataset = element => {
  // this const contains data sets
  const openingTag = element.split('>')[0];
  tagData = openingTag.match(/data-\w+="\w+"/g);
  // console.log(tagData);
  const dataAttributes = {};
  const attrArr = [];
  tagData.forEach(dataItem => {
    const matchData = dataItem.match(/data-(.+)="(.+)"/);

    // console.log(matchData[1]);  -> key data is element 1 in match object
    if (isNaN(matchData[2])) {
      dataAttributes[matchData[1]] = matchData[2];
    } else {
      dataAttributes[matchData[1]] = Number(matchData[2]);
    }
  });
  return dataAttributes;
};


const burger = `<div class="card" data-id="42" data-price="15" data-category="popular">
<div class="card-category">Popular</div>
<div class="card-description">
    <h2>The best burger in town (15€)</h2>
</div>
</div>`;

console.log(dataset(burger));
