/*
Este operador ($expr) sirve para poder hacer referencia a los valores que tienen los campos de un documento, en una consulta. Tambien sirve para ampliar 
la funcionalidad de algunos operadores, este find expresa que "episodios_temporadas" sea igual a "duracion".
*/
db.series.find({
    $expr: { $eq: ["$episodios_temporadas","$duracion"] } 
})

/*
$elemMatch sirve para filtrar los documentos principales cuyo campo array contiene documentos que cumplen todos los criterios especificados en el documento pasado como parámetro.
*/
db.series.find({
    $elemMatch:{genero:"Accion", duracion:45}
})