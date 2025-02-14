// querySelectorAll

const listItems = document.querySelectorAll(".item");
// It returns NodeList not HTMLCollection
// HOF can be used in NodeList

function milkRemover() {
  listItems.forEach(function (ele, i) {
    console.log(i, ele.innerText);
    ele.style.color = "brown";

    if (ele.innerText == "Milk") {
      ele.remove();
    }
  });
}

// milkRemover()

const listItemsnByGetElement = document.getElementsByClassName("item")
console.log( listItemsnByGetElement  )
// It gives a HTML COllection instead of NodeList

// to convert HTML Collection to Node List

const listItemsnByGetElementNodeList  = Array.from( listItemsnByGetElement )

console.log(listItemsnByGetElementNodeList)
