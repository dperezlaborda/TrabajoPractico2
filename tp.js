module.exports{

};

const vendedores = [
    "Ana",
    "Emilia",
    "Juan",
    "Lucas",
    "Sofia"
];

const ventas =[                                                                     
    [145, 2, 1, 2019, "Ana", "Recoleta", ["Audi A8","Aro de llanta de aluminio"]],
    [144, 3, 1, 2019 , "Sofia", "Microcentro", ["BMW X4", "Llanta de magnesio"]],
    [143, 16, 4, 2019, "Lucas", "Flores", ["Chevrolet Corvette", "Modulo Alarma Chevrolet Sonic"]],
    [345,25, 6, 2019, "Juan", "Flores", ["Parabrisas Chevrolet Agile", "Engranaje Libre Marcha Atras Caja Chevrolet"]],
    [305, 12, 5, 2019, "Lucas", "Recoleta", ["Modulo Alarma Chevrolet Sonic", "Caja De Velocidad P/chevrolet C10/400/chevy5ta "]],
    [346, 21, 12, 2019, "Emilia", "Flores", ["Modulo Alarma Chevrolet Sonic", "Emisor Combustible Bomba Combustible Volkswagen","Velocímetro Universal Cuenta Km"]]
];

const precios =[
    ["Audi A8", 67900],
    ["BMW X4", 50000],
    ["Chevrolet Corvette", 90000],
    ["Aro de llanta de aluminio", 2999],
    ["Llanta de magnesio", 10800],
    ["Modulo Alarma Chevrolet Sonic", 3000 ],
    ["Parabrisas Chevrolet Agile", 12000 ],
    ["Engranaje Libre Marcha Atras Caja Chevrolet", 250000 ],
    ["Caja De Velocidad P/chevrolet C10/400/chevy5ta ", 9000 ],
    ["Emisor Combustible Bomba Combustible Volkswagen", 2500 ],
    ["Velocímetro Universal Cuenta Km ", 3000],
];

const sucursales=[
    "Microcentro", "Flores", "Recoleta"
];

/*
 * 1. precioMaquina(componentes): recibe un array de componentes 
 * y devuelve el precio de la máquina que se puede armar con esos 
 * componentes, que es la suma de los precios de cada componente incluido.
 */ 

const suma=()=>{

} 

const precioAuto=(precios)=>{
    let total = 0;
    for (let i=0; i<precios.length ;i++){
        total += (precios[i][1])                                                // como accedo a una array dentro de otro array y como sumo.
    }
}

console.log(precioAuto(["", ""]))

/*
 * 2. cantidadVentasComponente(componente): recibe el nombre de un componente 
 * y devuelve la cantidad de veces que fue vendido. La lista de ventas no se pasa 
 * por parámetro, se asume que está identificada por la variable ventas.
 */

const cantidadVentasComponente=(ventas)=>{
    ventas.reduce((repetidos, nombreComponente)=>{                                        //.reduce is not a function 
        repetidos[nombreComponente] = (repetidos[nombreComponente] || 0) + 1;                   
    });
    return repetidos;
}

console.log(cantidadVentasComponente(""));

/**
 * 3.recibe por parámetro el nombre de una vendedora y retorna el importe total 
 * de ventas realizadas por dicha vendedora.
 */

const ventasVendedor=(ventas)=>{
    
}

console.log(ventasVendedor("Lucas"));

/**
 * 4. Devuelve el nombre del componente que más ventas tuvo históricamente. 
 * El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
 */

const componenteMasVendido=()=>{
    
}

/**
 * 5.Recibe por parámetro el nombre de una sucursal y retorna el importe de las ventas 
 * totales realizadas por una sucursal sin límite de fecha.
 */


/**
 * 6.Devuelve el nombre de la vendedora que más ingresos generó
 */

/**
 * 7.Debe retornar el importe promedio por venta, 
 * como un número entero sin decimales redondeado siempre para abajo.
 * (Hacer un promedio de todas las ventas) 
 */

/**
 * 8.Tiene que retornar un número aleatorio entre 100000000 y 999999999
 */

/**
 * 9.recibe por parámetro todos los datos de una venta, y los agrega en el array de ventas. 
 * Al igual que las ventas que ya están previamente creadas, además de estos datos 
 * necesitamos agregar el primer dato que es un identificador de la venta.
 * Para agregar este dato, tenemos que usar la función desarrollada en el punto anterior obtenerIdVenta.
 */