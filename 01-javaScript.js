var  json  =  {
    nombre : "Ricardo",
    edad : 26 ,
    soltero : verdad ,
  
}

console.log(json.nombre)
console.log(json['edad'])




var json2 = {
    nombre : "Ricardo",
    edad : 26 ,
    soltero : true ,
    fecha: new Date('1993/08/16'),
    interese:{

        hobbies: [
            'fulbol',
            'ps4'
        ],

        peliculas:[
{
nombre:'',
tipo:'',
esBuena: true

},

        ]
    }

}


//Stringify

var json2String = json.stringify(json2)
console.log(json2)
console.log(json2String)



