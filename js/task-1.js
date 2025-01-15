const categories = document.querySelector("#categories");
const categoryItems = categories.querySelectorAll(".item");
console.log("Total number of categories: " + categoryItems.length);
categoryItems.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
   const itemsList = category.querySelector(".item-list");
    const itemCount = itemsList ? itemsList.children.length : 0;
   console.log(`${categoryTitle}: ${itemCount} items`);
   });
  