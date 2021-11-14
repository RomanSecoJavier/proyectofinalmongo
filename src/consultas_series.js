/*
Quiero ver una serie que tengan 5 o menos temporadas, en la que salgan actores españoles y que tenga subtitulos
*/
db.series.find({
    $and:{
    temporadas:{$lte:5},
    personal:{nacionalidad:{$eq:"Española"}},
    subtitulos: {$eq: true}
    }
})
/*
Quiero ver una serie que no sea ni española ni japonesa, que los episodios no duren mas de 40 minutos y que no sea de Netflix
*/
db.series.find({
    $and:{
      procendencia:{$nin:["Japon","España"]},
      duracion:{$not:{$gt:40}},
      plataforma:{$ne:"Netflix"}
    }
})
/*
Hoy tengo que ir a una quedada y no tengo mucho tiempo para ver una serie con lo cual quiero que sea menos de 50 minutos o que tenga 3 o menos temporadas y que sea de antes de 2018
*/
db.series.find({
  $or:{
    duracion:{$lt:50},
    temporadas:{$lte:3},
    date:{$lt: new Date("2018-01-01")}
  }
})
/*
Quiero ver una serie en la que su director sea alex pero no se si se apellida pino o pina y que se haya estrenado entre 2014 y 2019 y que sea del genero de accion
*/
db.series.find({
  $and:{
  director:{$regex:/Alex Pin.*/},
  date:{$gte:new Date("2014-01-01"),$lte:new Date("2019-01-01")},
  genero:{$eq:"Accion"}
}
})
/*
Quiero ver una serie de drama y accion no sean de 2016 y 
*/
db.series.find({
  $and:{
    genero:{$all:["Drama","Accion"]},
    date:{$not:{$gte:new Date("2016-01-01")}}
  }
})