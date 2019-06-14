function edit_row(no){
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";
   
  let name = document.getElementById("name_row" + no);
  let phone = document.getElementById("phone_row" + no);
   
  let name_data = name.innerHTML;
  let phone_data = phone.innerHTML;
   
  name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "' required=''>";
  phone.innerHTML = "<input type='text' id='phone_text" + no + "' value='" + phone_data + "' required=''>";
 }



function save_row(no){
  let name_val = document.getElementById("name_text" + no).value;
  let phone_val = document.getElementById("phone_text" + no).value;

  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("phone_row" + no).innerHTML = phone_val;

  flag = true;

  if (name_val == "" || phone_val == "") {
    alert ( "Пожалуйста заполните поле." );
    flag = false;

    let name = document.getElementById("name_row" + no);
    let phone = document.getElementById("phone_row" + no);
     
    let name_data = name.innerHTML;
    let phone_data = phone.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "' required=''>";
    phone.innerHTML = "<input type='text' id='phone_text" + no + "' value='" + phone_data + "' required=''>";

  } else {
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
  }
  return flag;
}



function delete_row(no){
  document.getElementById("row" + no + "").outerHTML = "";
}



function validate_form(){
  valid = true;

  if ( document.form.add_name.value == "" || document.form.add_phone.value == ""){
    alert ( "Пожалуйста заполните поле." );
    valid = false;
  } else {
    let new_name = document.getElementById("new_name").value;
    let new_phone = document.getElementById("new_phone").value;
     
    let table = document.getElementById("data_table");
    let table_len = (table.rows.length);
    let row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='phone_row"+table_len+"'>"+new_phone+"</td><td class='table-row'><input type='button' id='edit_button"+table_len+"' value='Edit' class='btn-style edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='btn-style save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete btn-style' onclick='delete_row("+table_len+")'></td></tr>";
   
    document.getElementById("new_name").value="";
    document.getElementById("new_phone").value="";
  }

  return valid;
}



// window.onload = function() {

//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', '/my/url', true);  
//   xhr.send(); 
//   xhr.onreadystatechange = function() {
//     if (this.readyState != 4) return;
  
//     if (this.status != 200) {
//       alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
//       return;
//     }
  
//   }
// }