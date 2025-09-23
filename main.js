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
    let output = "";

    for (let book of myLibrary)
    {
        let data = "";

        for (let info in book)
        {
            if (info != "id")
            {
                data += book[info] + (info === "isRead" ? ". " : ", ");
            }
        }

        output += data + "\n";
    }

    document.getElementById("data").innerText = output;
}

displayAllBooks();