function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
    titulo: function(){ 
        return _titulo; 
    },
    meter:  function(nombre, tf){
        _contenido[nombre]=tf; 
    },
    tf:function(nombre){ 
        return _contenido[nombre]; 
    },
    borrar: function(nombre){ 
        delete _contenido[nombre]; 
    },
    toJSON: function(){ 
        return JSON.stringify(_contenido);
    },
    listar: function(){ 
      _cadena = ''; 
        for(a in Object.keys(_contenido)){
      _cadena += Object.keys(_contenido)[a] + ': ' + this.tf(Object.keys(_contenido)[a]) + "\n";
    }; 
        return _cadena;
    }
  }
}
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

console.log(amigos.listar());