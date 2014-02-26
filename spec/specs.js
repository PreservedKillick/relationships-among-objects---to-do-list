describe('ToDoList',function(){
  describe('addItem',function(){
    it('should add an item to a to do list', function(){
      var newList = Object.create(ToDoList);
      newList.items = [];
      newList.items.push('Eat Cookie')
      addItem().should.equal(['Eat Cookie'])
    })
  })
})

// describe('ToDoItem',function(){
//   describe('itemCreate',function(){
//     it('it should create a todo', function(){
//       var newItem = Object.create(ToDoItem);
//       newItem.itemCreate('Eat chips').should.equal('Eat ')
      
//     })
//   })
// })
