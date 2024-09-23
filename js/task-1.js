const categoriesList = document.querySelectorAll("#categories > .item");

console.log(`Liczba kategorii: ${categoriesList.length}`);

categoriesList.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("ul > li").length;

    console.log(`Kategoria: ${categoryTitle}`);
    console.log(`Liczba elementów: ${itemsCount}`);
});
