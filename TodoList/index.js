function getAndupdate() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    console.log("Updating List..");
    if(localStorage.getItem('itemsJson')==null)
    {
        itemJasonArray = [];
        itemJasonArray.push([tit, desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJasonArray));
    }
    else
    {
        itemJasonArrayStr = localStorage.getItem('itemsJson');
        itemJasonArray = JSON.parse(itemJasonArrayStr);
        itemJasonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJasonArray));
    }
    update();
}

function update()  {
    if(localStorage.getItem('itemsJson')==null)
    {
        itemJasonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJasonArray));
    }
    else
    {
        itemJasonArrayStr = localStorage.getItem('itemsJson');
        itemJasonArray = JSON.parse(itemJasonArrayStr);
       
    }
    //populating table
    let tableBody = document.getElementById("tableBody");
    let str = " ";
    itemJasonArray.forEach((element,index) => {
        str +=`
        <tr>
            <td>${index + 1}</td>
            <td>${element[0]}</td>
            <td style="word-wrap: break-word">${element[1]}</td>
            <td><button class="btn" onclick="deleted(${index})" >Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();
function deleted(itemIndex) {
    console.log("Delete",itemIndex);
    itemJasonArrayStr = localStorage.getItem('itemsJson');
    itemJasonArray = JSON.parse(itemJasonArrayStr);
    //delete itemIndex element form array
    itemJasonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJasonArray));
    update();
}

function clearStorage(){
    if(confirm("Do you want to clear list?")){
        console.log("Clearing the List...")
        localStorage.clear();
        update();
    }
}

