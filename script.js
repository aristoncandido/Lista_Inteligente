let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

let novoItem = document.getElementById('item');




// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', buscarItems);

//função q add item
function addItem(event) {




  if(novoItem.value != ''){
    event.preventDefault();


    //receber valor do Input
    let novoItem = document.getElementById('item');


    novoItem = novoItem.value;
     



    //criar elemento
    let li = document.createElement('li');

    li.innerHTML = novoItem;


    //jogou a classe da lista no elemento
    li.className = 'list-group-item';

    //adicionou na lista
    itemList.appendChild(li);




    //CRIA O BOTAO DELETE , ASSOCIA A CLASSE E VALOR DENTRO;
    let btn = document.createElement('button');

  


    btn.className = 'btn btn-danger btn-sm float-end delete';

    btn.appendChild(

        document.createTextNode('X')

    );


    li.appendChild(btn);



   form.reset();
     
   
  
  









}else{

    alert("Digite o nome do item");
}







  }  
   













//função p remover item

function removeItem(click) {


    // pega a li e usa o metodo remove

    if (click.target.classList.contains('delete')) {

        let li = click.target.parentElement;

        itemList.removeChild(li);


    }





}



function buscarItems(evento) {
    /* 
        let filter = document.getElementById('filter');
    
      
    
       item = Array.from(item)
    
    
       for(var i  =0 ; i< item.length ; i++){
    
                if(filter.textContent)
       }
    
        
       */

 
    let texto = evento.target.value.toLowerCase();

    let items = itemList.getElementsByTagName('li');



    Array.from(items).forEach(function (item) {

        let itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(texto) != -1) {
            item.style.display = 'block'; // exibe o item
        } else {
            item.style.display = 'none'; // oculta o item
        }










    })





}

