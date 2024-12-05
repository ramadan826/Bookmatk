var Name=document.getElementById("Name");
var urlSite=document.getElementById("url");

var tableBody=document.getElementById("demo")


var bookMark;

if (localStorage.getItem("Product")==null) 
{
    bookMark=[];
}
else{
    bookMark=JSON.parse(localStorage.getItem("Product"))
    displayData()
}

function addProduct() {
    if( vaildation(Name) && vaildation(url)){
        
        var sites={
            Name :Name.value,
            url:urlSite.value
         }
         bookMark.push(sites);
        localStorage.setItem("Product",JSON.stringify(bookMark));
         displayData()
         clerform()
        }
    }
   





function clerform()
{
    Name.value=null;
    urlSite.value=null;

}


function displayData()
{
var cartona=``;

    for(i=1;i<bookMark.length;i++)
        {

            cartona+=`
            <tr>
            <td>${i}</td>
            <td>${bookMark[i].Name}</td>
            <td><a href="${bookMark[i].url}"class="btn btn-success" target="blank"><i class="fa-solid fa-eye px-2"></i>Visit</a></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger "><i class="fa-solid fa-trash px-2"></i>Delete</button></td>
            </tr>
            
            `

        }

        tableBody.innerHTML=cartona;
}

function deleteProduct(index)
{

    bookMark.splice(index,1);
    localStorage.setItem("Product",JSON.stringify(bookMark))
    displayData()
    
}


function vaildation(input){
    var Regex={
        Name: /^[A-Z][a-z]{3,}$/,
        url: /^(https?|http):\/\/(www.)[a-z]{3,}(.com)\/$/
    }
   if(Regex[input.id].test(input.value)){
    input.nextElementSibling.classList.replace('d-block','d-none')
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
    return true
   } 
   else{
    input.nextElementSibling.classList.replace('d-none','d-block')
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    return false
   }
}

