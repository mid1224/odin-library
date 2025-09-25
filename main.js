const myLibrary = [];

function Book(id, title, author, pagesNum, isRead) 
{
    if (!new.target)
    {
        throw Error("The operator 'new' must be used");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.pagesNum = pagesNum;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pagesNum, isRead) 
{
    myLibrary.push(new Book(crypto.randomUUID(), title, author, pagesNum, isRead));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("A Game of Thrones", "George R. R. Martin", 694, true);

function displayAllBooks()
{
    const bookContainer = document.getElementById("data");
    bookContainer.innerHTML = ""; // Clear the container first

    for (const book of myLibrary)
    {
        const card = document.createElement("div");
        card.classList.add("book");

        const title = document.createElement("p");
        title.innerHTML = `<b>Title:</b> "${book.title}"`;

        const author = document.createElement("p");
        author.innerHTML = `<b>Author:</b> ${book.author}`;

        const pages = document.createElement("p");
        pages.innerHTML = `<b>Pages:</b> ${book.pagesNum}`;

        const readStatus = document.createElement("p");
        readStatus.innerHTML = `<b>Read:</b> ${book.isRead ? "Yes" : "No"}`;

        card.append(title, author, pages, readStatus);
        bookContainer.appendChild(card);
    }
}

displayAllBooks();