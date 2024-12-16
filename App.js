import {useState}  from 'react'

import './App.css'


let nextId=3

function App(){

// we want two fields in todo app input and button we take them in one div tag
//here we are creeating functional component and we put default export
//bootstrap cdn file has to be included in index.html 
//after we given container class we get some margin 
//for styling of fields  in bs for  form inputs we give className= form control input particular style will be applied
//
//to get both fileds side by side we take classname input-group in div filed
//margin top 5 width 50%
//in bs we have classname called listgroup for ul
//delete for todo item
//windows+. emoji
//to get button and todo in same line we use flex
//in app.css flex is used
//textcenter class for h3 bs
//now we have to give add click event and it has to be added in ul
//for this we have to use state conceot
//todo list variable and put the todo in it
//take array and put it there
//state ni maintain cheyyali use state ane hook use chesi
//2 todos add and delete for dynamic we use conceot state
//usestate hook will be useful
//initial ga pass chesindi oka variable ni craete chesi ee value pedutundi
//todos anni oka array lo pettali
//okko todo oka object ante {key->id,}
//usestate is method which is in library 
//manam iche input variable lo store chesukoni aa variable ni usestate return chestundi
//danni use chesukoni dynamic ga update cheyyadaniki
//use state returns array [var,func] lo oka variable and update cheyyadaniki function untundi
//ee renintini manam mana component lo acess chesukovadaniki us chese syntax
//destructuring array comcept
//li are todolist lo enni unte anni sarlu repeat avvali
//js lo we use map method
//array lo prati element ki call back function call chestu
//return chesdanni array form lo istundi


//after dispalying todos 
//now new todos add clickevent for buttton
//onclick=function{} rayali new todo add
//direct implementation or arrow function malli vere function call chesukovachu










    let [todoList, updateTodos]=useState(
      [
        {
          id:1,
          task:'Learn React'
        },
        {
          id:2,
          task:'Learn Angular'
        }
      ]
    )
    //let nextId=3

    let [todoInput, updateInput] = useState()

    //test ane value todo input ane dantloki vastundi






  function addNewTodo(){
    //input field lo unna text manam todolist lo object kinda add chestam
    //1st techukovali
    //id or classname dwara techukovachu
    //butreact lo usestate ane hook use chesi input field ki bind cheste 
    //inko state variable create=ing


    //alert(todoInput)

    //enter chesindi object kinda add  cheyyali tidolist lo

    if(todoInput==" "){
      alert("add some task")
    }
    else{
      let newTodos=[
        ...todoList,
        {
          id:nextId++,
          task: todoInput
        }
      ]
      updateTodos(newTodos);
      updateInput(' ')
    }
  }






  function deleteTodo(id){
    let updatedTodos=todoList.filter(
      (todo)=>{
        return todo.id!=id
      }
    )
    updateTodos(updatedTodos)

  }

//change ayinapudu 
//todoinput ki change cheyyali onchange tarvata

  return(
    <div className="container mt-5 w-50" >
      <h3 className="text-center">To-Do app using React</h3>
      <div className="input-group">
        <input className="form-control" onChange={(e)=>{
          let task=e.target.value;
          updateInput(task)
        }} type='text' value={todoInput} />
        <button onClick={()=>{
          addNewTodo()
        }} className="btn btn-primary"> Add</button>
      </div>
      <ul className="list-group mt-4">
        {
          todoList.map(
            (todo)=>{
              return (
                <li className="list-group-item">
                  <p>{todo.task}</p>
                  <button onClick={()=>{
                    deleteTodo(todo.id)
                  }
                  } className="btn">❌</button>
                </li>
              )
    
            }
          )
        }


      </ul>
    </div>
    
  )

}

export default App;
/*<li className="list-group-item">
          <p>todo1</p>
          <button className="btn">❌</button>
        </li>
        <li className="list-group-item">
          <p>todo2</p>
          <button className="btn">❌</button>
        </li>*/