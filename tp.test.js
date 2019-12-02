const ventaComputadoras = require ('./tp')

const vendedoras = ventaComputadoras.vendedoras;
const ventas = ventaComputadoras.ventas;
const precios = ventaComputadoras.precios
const sucursales = ventaComputadoras.sucursales;
const precioMaquina = ventaComputadoras.precioMaquina;
const cantidadVentasComponente = ventaComputadoras.cantidadVentasComponente;
const componenteMasVendido = ventaComputadoras.componenteMasVendido;
const ventasSucursal = ventaComputadoras.ventasSucursal;
const ventaPromedio= ventaComputadoras.ventaPromedio;
const obtenerIdVenta = ventaComputadoras.obtenerIdVenta;
const agregarVenta = ventaComputadoras.agregarVenta;

//1
test ('suma los precios de cada componente', ()=>{
    expect(precioMaquina(['HDD Toyiva' , 'RAM Quinston'])).toBe(200);
})

//2
test('debe devolver cantidad de ventas que se vendio un componente', ()=>{    
    expect(cantidadVentasComponente('Monitor GPRS 3000')).toBe(3)
    expect(cantidadVentasComponente('Motherboard ASUS 1500')).toBe(2)
    expect(cantidadVentasComponente('Monitor ASC 543')).toBe(3)
    expect(cantidadVentasComponente('Motherboard ASUS 1200')).toBe(3)
    expect(cantidadVentasComponente('Motherboard MZI')).toBe(1)
    expect(cantidadVentasComponente('HDD Toyiva')).toBe(1)
    expect(cantidadVentasComponente('HDD Wezter Dishital')).toBe(0)
    expect(cantidadVentasComponente('RAM Quinston')).toBe(1)
    expect(cantidadVentasComponente('RAM Quinston Fury')).toBe(0)
})

//3
test('debe devolver el importe total de ventas de cada vendedora', ()=>{
    expect(ventasVendedora('Grace')).toBe(1040)
    expect(ventasVendedora('Ada')).toBe(670)
    expect(ventasVendedora('Hedy')).toBe(460)
})

//4
test ('debe devolver el componente mas vendido historicamente', ()=>{
    expect(componenteMasVendido()).toBe('Monitor GPRS 3000')
})

//5
test ('debe devolver el importe total de ventas de una sucursal', ()=>{
    expect(ventasSucursal('Centro')).toBe(990)
    expect(ventasSucursal('Caballito')).toBe(1130)
})

//6
test('Sabemos que la mejor vendedora fue Grace', () => {
    expect(mejorVendedora()).toBe("Grace")
});

//7
test('debe devolver un promedio de todas las ventas', ()=>{
    expect(ventaPromedio()).toBe(353)
});

//8
test('devuelva un numero random', ()=>{
    expect(typeof obtenerIdVenta()).toBe('number');
});

//9
test ('agregar venta', ()=>{
    let newVenta = agregarVenta(10, 4, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'])
    expect(newVenta).toStrictEqual(ventas);
});

