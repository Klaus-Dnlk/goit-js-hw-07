const categoryList = document.querySelector('#categories');
console.log(`В списке ${categoryList.children.length} категории.`);  

[...categoryList.children].forEach(item => {
    console.log(`Категория ${item.children[0].textContent}`)
    console.log(`Колличество элементов ${item.children[1].children.length}`)
})

