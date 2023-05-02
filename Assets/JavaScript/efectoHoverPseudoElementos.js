
let listasDesplegablesDeBotonesBarraNavegacion = document.querySelectorAll('nav > .lista-opciones-desplegables');

listasDesplegablesDeBotonesBarraNavegacion.forEach((listaDesplegable)=>{


})

for(var i=0; i<listasDesplegablesDeBotonesBarraNavegacion.length; i++){

    listasDesplegablesDeBotonesBarraNavegacion[i].addEventListener('mouseover',()=>{
        
        let estilosElement = document.createElement('style');
        estilosElement.innerText = `
    
        .boton-barra-navegacion:nth-child(${i+1})::after{
            width:100%;
        }

        .boton-barra-navegacion:nth-child(${i+1}){
            color: var(--color-texto-imagen-presentacion);
        }

        `;
        
        insertarReglasCSSAdicionalesEnStyle(estilosElement);

        
        listasDesplegablesDeBotonesBarraNavegacion[i].addEventListener('mouseout',()=>{
            quitarReglasCSSAdicionalesEnStyle(estilosElement);
        });

    })

}