// Clase Abstraccion 

class Empleado {
    #nombre;
    #salarioBase;

    constructor(nombre,salarioBase){
        this.#nombre = nombre;
        this.#salarioBase = salarioBase;
    }

    get nombre (){
        return this.#nombre
    }

    get salarioBase (){
        return this.#salarioBase
    }

    calcularSalario (){
        throw new Error("debe implementar calcularSalario()")
    }
}


// Herencia + Polimorfismo

class Desarrollador extends Empleado {
    #bonoProyecto;

    constructor(nombre, salarioBase, bonoProyecto){
        super(nombre,salarioBase);
        this.#bonoProyecto = bonoProyecto;
    }

    calcularSalario(){
        return this.salarioBase + this.#bonoProyecto;
    }
}

class Diseñador extends Empleado {
    #bonoCreatividad;

    constructor(nombre, salarioBase, bonoCreatividad){
        super(nombre,salarioBase);
        this.#bonoCreatividad = bonoCreatividad;
    }

    calcularSalario(){
        return this.salarioBase + this.#bonoCreatividad
    }
}

// Prueba

const empleados = [
    new Desarrollador("Juan",2000,500),
    new Diseñador("Ana",1800,300)
];

empleados.forEach(emp=>{
    console.log(`${emp.nombre} gana ${emp.calcularSalario}` )
})