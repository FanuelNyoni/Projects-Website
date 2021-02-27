document.addEventListener("DOMContentLoaded", () => {
  //adding event listeners
  var list = document.querySelector("#book-list ul");

  //delete books
  list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  });

  //add books
  var forms = document.forms; //forms are an HTML entity
  Forms = Array.from(forms);
  console.log(Array.isArray(Forms));
  addForm = Forms[1];

  console.log(addForm);

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //add text content
    deleteBtn.textContent = "delete";
    bookName.textContent = value;

    //add classnames to created content
    //can use bookName.classList.add()
    bookName.className = "name";
    deleteBtn.className = "delete";

    //append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    //now append to  List
    list.appendChild(li);
  });

  //hide books using checkbx

  const hideBox = document.querySelector("#hide");

  hideBox.addEventListener("change", (e) => {
    if (hideBox.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  //creating searchbox using key events
  const searchForm = Forms[0].querySelector("input"); //grab input

  searchForm.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase(); //convert input to lc
    const books = list.getElementsByTagName("li"); //grab list n convert to array
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if (title.toLocaleLowerCase().indexOf(term) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });

  //creating tabbed content
});
