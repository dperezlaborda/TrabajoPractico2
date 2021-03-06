const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
    [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
    [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
    [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
    [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
    [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
    [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
];

const precios = [
    [ 'Monitor GPRS 3000', 200 ],
    [ 'Motherboard ASUS 1500', 120 ],
    [ 'Monitor ASC 543', 250 ],
    [ 'Motherboard ASUS 1200', 100 ],
    [ 'Motherboard MZI', 30 ],
    [ 'HDD Toyiva', 90 ],
    [ 'HDD Wezter Dishital', 75 ],
    [ 'RAM Quinston', 110 ],
    [ 'RAM Quinston Fury', 230 ]
];

const sucursales = ['Centro', 'Caballito'];

/*
 * 1. precioMaquina(componentes): recibe un array de componentes 
 * y devuelve el precio de la máquina que se puede armar con esos 
 * componentes, que es la suma de los precios de cada componente incluido.
 */ 

const precioMaquina = (componentes) => {
    let precioComponentes = componentes.map((componente)=> precios.find((precio) => precio [0] == componente));  
    return precioComponentes.filter((elem) => elem != undefined).map(elem => elem[1]).reduce((acumulador, elem) => acumulador+elem, 0)
}

console.log(precioMaquina(["Monitor ASC 543", "Motherboard ASUS 1200"]))

/*
 * 2. cantidadVentasComponente(componente): recibe el nombre de un componente 
 * y devuelve la cantidad de veces que fue vendido. La lista de ventas no se pasa 
 * por parámetro, se asume que está identificada por la variable ventas.
 */

const cantidadVentasComponente = (componente) => {
    let contador = 0;
    ventas.forEach( venta => {
       for (let comp of venta[6]){              
            if ( comp == componente){
                contador++;
            }
       }     
    });
    return contador;
}

console.log(cantidadVentasComponente(""));

/**
 * 3.recibe por parámetro el nombre de una vendedora y retorna el importe total 
 * de ventas realizadas por dicha vendedora.
*/

const ventasVendedora = (nombre) => {
    let importeTotal = 0;
    for (let i = 0; i < ventas.length; i++){
        if(ventas[i][4] == nombre){
        for (let x = 0; x < ventas.length; x++)
        for (let y = 0; y < precios.length; y++){
            if (precios[y][0] == ventas[i][6][x]){
                importeTotal += precios[y][1]
            }
        }
    }};
    return importeTotal;
};

console.log(ventasVendedora("Ada")); 

/**
 * 4. Devuelve el nombre del componente que más ventas tuvo históricamente. 
 * El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
*/

const componenteMasVendido=()=>{
    const componentesVendidos = precios.map( elem => {
        let nombreDelComponente = elem[0]
            return cantidadVentasComponente(nombreDelComponente);
        });
    let acc = [0,0]                                                           //que es acc¿??
    for(let i = 0;  i < componentesVendidos.length; i++){
        if( acc[0] > componentesVendidos[i] ){
            acc = [componentesVendidos[i],i]
        }
    }    
    let indiceDeMax = acc[1]
    return precios[indiceDeMax][0];
}

console.log(componenteMasVendido());

/**
 * 5.Recibe por parámetro el nombre de una sucursal y retorna el importe de las ventas 
 * totales realizadas por una sucursal sin límite de fecha.
*/

const ventasSucursal = (sucursal) => {
    let importeTotal = 0;
    for (let i = 0; i < ventas.length; i++){
        if(ventas[i][5] == sucursal){
            for (let x = 0; x < ventas.length; x++)
            for (let y = 0; y < precios.length; y++){
                if (precios[y][0] == ventas[i][6][x]){
                    importeTotal += precios[y][1]
                }
            }
        }    
    }
    return importeTotal;
};

console.log(ventasSucursal("Centro"))

/**
 * 6.Devuelve el nombre de la vendedora que más ingresos generó
*/

const mejorVendedora=()=>{
    let contador = 0;
    let mejorVendedora = "";
    for (let vendedora of vendedoras){
        let ingresosGenerados = ventasVendedora(vendedora)
        if (ingresosGenerados > contador){
            mejorVendedora = vendedora;
            contador = ingresosGenerados;
        }
    }
    return mejorVendedora;
};
 
console.log(mejorVendedora())

/**
 * 7.Debe retornar el importe promedio por venta, 
 * como un número entero sin decimales redondeado siempre para abajo.
 * (Hacer un promedio de todas las ventas) 
 */

const ventaPromedio=()=>{
    let suma = 0;
    for (let i = 0;  i < ventas.length; i++){
        suma = suma + precioMaquina(ventas[i][6]);
    }
    return Math.floor(suma / ventas.length)
}

console.log(ventaPromedio());

/**
 * 8.Tiene que retornar un número aleatorio entre 100.000.000 y 999.999.999
 */

const obtenerIdVenta = () => {
    let id=Math.floor(Math.random() * ( 999999999 - 100000000)) + 100000000;  // Math.floor redondea siempre para abajo, no importa si es 5 o 1( max - min ) + min;
    return id;   
}
/**
 * 9.recibe por parámetro todos los datos de una venta, y los agrega en el array de ventas. 
 * Al igual que las ventas que ya están previamente creadas, además de estos datos 
 * necesitamos agregar el primer dato que es un identificador de la venta.
 * Para agregar este dato, tenemos que usar la función desarrollada en el punto anterior obtenerIdVenta.
 */

const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes) => {
    if(typeof dia != "number"){   
        throw "No es un mumero";
    }     
    ventas.push([obtenerIdVenta(), dia, mes, anio, vendedora, sucursal, componentes]);
    return ventas;
};

module.exports ={
    vendedoras,
    ventas, 
    precios,
    sucursales,
    precioMaquina,
    cantidadVentasComponente,
    ventasVendedora,
    componenteMasVendido,
    ventasSucursal,
    mejorVendedora,
    ventaPromedio,
    obtenerIdVenta,
    agregarVenta
}
