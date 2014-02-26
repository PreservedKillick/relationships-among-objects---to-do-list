var ToDoList = {
  addItem: function(item){
    this.items.push(item)
    }
};
var ListOfLists = {
  addList: function(list) {
    this.lists.push(list)
  }
};

$(document).ready(function() {
  var listToEdit;
  var lols = Object.create(ListOfLists);
  lols.lists = []
  $('form#newToDoList').submit(function(event) {
  event.preventDefault();
  var newList = Object.create(ToDoList);
  lols.addList(newList);
  lols.lists[lols.lists.length-1].name = $('input#newList').val();
  newList.items = [];
  
 

  $('#listOfLists ul').html('')
  lols.lists.forEach(function(list){
    $('#listOfLists ul').append('<li>' + list.name + '</li>');
      $('#listOfLists ul li').last().click(function(){
        $('h2.listToAddTo').html($(this).text()) 
        listToEdit = list;
        $('div.listItems ul').html('');
        list.items.forEach(function(item, index){
          $('div.listItems ul').append('<li>'+list.items[index]+'</li>')
        });
      })
    });
  }); 




  $('form#newListItem').submit(function(event) {
  event.preventDefault();
  listToEdit.addItem( $('input#listItem').val());
  
 $('.listItems ul').html('')
  listToEdit.items.forEach(function(item){
    $('.listItems ul').append('<li>' + item + '</li>');
  }); 
 });
});
