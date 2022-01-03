

function call_me() {
  
}

add_action('init', 'call_me');




DashAPI.add_menu('hello', 'Hello', 'float-icon', null);
DashAPI.add_menu('sub-hello', 'Sub Hello', 'float-icon', 'hello');


DashAPI.On('init', () => {
  
});



DashAPI.add_action('init', call_me);


SheetAPI.On('cell-edit', ()=>{
  
});


                  


























