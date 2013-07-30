Messages = new Meteor.Collection('messages');

if (Meteor.is_client) {

  //Declarar valores
  var cont=0;
  var data="";
  var default_html = "<h1>Hello World!</h1>";

  //Actualiza y valida el storage
  var s = setInterval(function(){
    if ($('#code').val() === "") { 
      //localStorage.clear();       
      localStorage.setItem('contentcode',default_html);
      data = localStorage.getItem('contentcode');
    }
    else{
      data = localStorage.getItem('contentcode');
    }

    //Mostramos
    $('#result').html(data);
    $('#code').empty().val(""+data);
    $( ".draggable" ).draggable();

  },500);

  Template.entryfield.events = {
    "keyup #code": function(event){
      //Atrapar valores
      var code = $('#code');
      var htmleditable = $('#code').val();

      //Arreglamos el HTML
      if ((htmleditable.indexOf('&lt;') !== -1) && (htmleditable.indexOf('&gt;') !== -1)) {
          localStorage.contentcode = htmleditable;
      }

      //Mostramos
      localStorage.contentcode = htmleditable;

      //enviar al servidor
      var a = localStorage.getItem('contentcode');
      console.log(a);
      Messages.insert({
          "room": a
        });
    }
  }
}

if (Meteor.isServer) {
}
