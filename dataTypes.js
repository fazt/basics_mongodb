// MONGODB SOPORTA ESTOS TIPOS DE DATOS

// null
{x: null}
// boolean
{x: true}
// number
{"x": 3.1415}
{"x": 3}
{"x": NumberInt("3")} //entero de 4 bytes
{"x": NumberLong("3")} //entero de 8 bytes
//string
{"x": "foobar"}
//Date
{"x": new Date()}
// expresiones regulares
{"x": /foobar/i}
// array
{"x": ['a','b','c']}
{"x": ['a',123]}
//documentos embebidos
{"x": {"foo":"bar"}}
// objetID
{"x": ObjectId()}
// binary data- no manipulable desde la shell
// code
{"x": function() {
  return print('works');
}}
