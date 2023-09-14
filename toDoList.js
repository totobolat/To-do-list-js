let addForm = document.querySelector("#addForm")

addForm.addEventListener("submit", addButton)

function addButton(event) {
    event.preventDefault();
    addItem();
    document.querySelector("#item").value ="" // Makes input field empty
    handleHover()
}


function addItem() {
    const re = new RegExp("[^\s][A-z0-9À-ž\s]+")
    if (re.test(document.querySelector("#item").value)) {   // correct type of text check
        const list = document.querySelector("#list")    //ul
        const newItem = document.createElement("li")    //creates li for ul
        newItem.innerHTML=document.querySelector("#item").value

        newItem.classList.add("list-group-item","d-flex","align-items-center", "border-0", "mb-2", "rounded","hover","task")
        newItem.style.backgroundColor='#f4f6f7'
        list.appendChild(newItem)
        const newSpan = document.createElement("span")
        const txt = document.createTextNode("\u00D7");
        newSpan.classList.add("closing")
        newSpan.setAttribute('title', 'click to remove this Item');
        newSpan.setAttribute('onclick', 'this.parentElement.remove()');
        newSpan.appendChild(txt);
        newItem.append(newSpan)

    }
    else {
        $('.toast').toast("show")   //alert if wrong
    }
    
}
let items = [];

function store(item_id) {
    item_id = item_id.toString();
    items.push(item_id);
    localStorage.setItem("myStorage", items);
}
function handleHover () {

    let hoverItems = document.getElementsByClassName("hover")

    for (let i = 0; i < hoverItems.length; i++) {
        hoverItems[i].onmouseover = function() {
            hover(hoverItems[i]);
        };
        hoverItems[i].onmouseout = function() {
            hoverOut(hoverItems[i]);
        };
        hoverItems[i].addEventListener("click",strikeLine)      //strike out items to know they are completed

    }
}

function strikeLine(event) {
    let a=getComputedStyle(event.target).textDecorationLine.includes("line-through")
    if(a) {
        event.target.style.setProperty('text-decoration','');
        console.log("a");
    }
    else {
        event.target.style.setProperty("text-decoration", "line-through");
    }
}

function hover(a) {
    a.style.backgroundColor = "white";
    console.log("event.currentTarget.tagName")
}
function hoverOut(a) {
    a.style.backgroundColor = "#f4f6f7";
    console.log("event.currentTarget.tagName")
}


