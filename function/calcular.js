//el numero de la pocicion de los numero obedece a la nomenglatura
//columna_fila
let Determinante2 = 0;
let Determinante3 = 0;
const btnCalcular2 = document.getElementById('calcular2');
const btnCalcular3 =  document.getElementById('calcular3');
const btnCalcular4 = document.getElementById('calcular4');
const show2 = document.getElementById('show2');
const show3 = document.getElementById('show3');
const show4 = document.getElementById('show4');


// la formula para el metodo de Sarrus seria
// determinante = (a*d-(b*c))
btnCalcular2.addEventListener("click", () => {

    const a = parseInt(document.querySelector('#a').value);
    const b = parseInt(document.querySelector('#b').value);
    const c = parseInt(document.querySelector('#c').value);
    const d = parseInt(document.querySelector('#d').value);
    const showStepM2 = document.getElementById('showStepM2');
    
    Determinante2 = (a*d-(b*c));

    show2.innerHTML = "";
    showStepM2.innerHTML = "";

    
    showStepM2.innerHTML += `
        <h3>Paso 1:</h3>
        <p class="pl-3">
            Multiplicar la diagonal principal.
        </p>
        <p class="pl-3">
            Diagonal principal  ${a} x ${d} = ${a*d};
        </p>


        <h3>Paso 2:</h3>
        <p class="pl-3">
            Multiplicar la diagonal secundaria.
        </p>
        <p class="pl-3">
            Diagonal secundaria ${b} x ${c} = ${b*c};
        </p>


        <h3>Paso 3:</h3>
        <p class="pl-3">
            Al resultado de la multiplicacion de la diagonal principal restarle el de la secundaria .
        </p>
        <p class="pl-3">
            resta de diagonal ${a*d} - (${b*c}) = ${a*d-(b*c)};
        </p>
    `;
    show2.innerHTML += Determinante2;

    
});

//la formula para el metodo de Sarrus matriz 3x3
// Determinante3 = ( ( ( (e)*(i)*(m) )+( (f)*(j)*(k) )+( (g)*(h)*(l) ) ) -  ( ( (k)*(i)*(g) )+( (l)*(j)*(e) )+( (m)*(h)*(f) ) ) ); 
btnCalcular3.addEventListener("click", ()=>{
    
    const e = parseInt(document.querySelector('#e').value);
    const f = parseInt(document.querySelector('#f').value);
    const g = parseInt(document.querySelector('#g').value);
    const h = parseInt(document.querySelector('#h').value);
    const i = parseInt(document.querySelector('#i').value);
    const j = parseInt(document.querySelector('#j').value);
    const k = parseInt(document.querySelector('#k').value);
    const l = parseInt(document.querySelector('#l').value);
    const m = parseInt(document.querySelector('#m').value);
    const showStepM3 = document.getElementById('showStepM3');

    Determinante3 =(( ( (e)*(i)*(m) )+( (f)*(j)*(k) )+( (g)*(h)*(l) ) )) - (( (k)*(i)*(g) )+( (l)*(j)*(e) )+( (m)*(h)*(f) )); 

    show3.innerHTML = "";

    show3.innerHTML += Determinante3;

    showStepM3.innerHTML = "";

    
    showStepM3.innerHTML += `
        <h3>Paso 1:</h3>
        
        <div class="pl-3">
        <p>
            Multiplicar la diagonal principal y sus paralelas.
        </p>
            <p>Diagonal principal  ${e} x ${i} x ${m} = ${e*i*m};</p>
            <p>primer paralela: ${f} x ${j} x ${k} = ${f*j*k};</p>
            <p>segunda paralela: ${g} x ${h} x ${l} = ${g*h*l};</p>
        </div>


        <h3>Paso 2:</h3>
        
        <div class="pl-3">
        <p>
            Multiplicar la diagonal secundaria y sus paralelas.
        </p>
            <p> Diagonal secundaria  ${k} x ${i} x ${g} = ${k*i*g};</p>
            <p> primera paralela: ${l} x ${j} x ${e} = ${l*j*e};</p>
            <p> segunda paralela: ${m} x ${h} x ${f} = ${m*h*f};</p>
        </div>

        <h3>Paso 3:</h3>
        <p class="pl-3">
            Restarle al resultado de la multiplicacion de en diagonal principal el resultado de la secundaria.
        </p>
        <p class="pl-3">
            resta de diagonales:  ${( ( (e)*(i)*(m) )+( (f)*(j)*(k) )+( (g)*(h)*(l) ) )} - (${( (k)*(i)*(g) )+( (l)*(j)*(e) )+( (m)*(h)*(f) )}) = ${Determinante3};
        </p>
    `;
    
});
