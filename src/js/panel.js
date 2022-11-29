export const panel = {
    propiedades: [
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,2,2,2,2,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,4,0,0,0,0,0,1],
        [1,0,0,0,4,4,4,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,3,3,0,0,0,0,0,0,1],
        [1,0,0,3,3,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
        ],  
                  
    metodos: () =>{
        var color = " "
        var tablaHTML = ` `

        for (let y = 1; y < panel.propiedades.length-1; y++) {

            tablaHTML+=`<div class="piezaFila">`

            for (let x = 2; x < panel.propiedades[y].length; x++) {
                if (panel.propiedades[y][x-1] == 2){
                    color = "primary"
                }else if (panel.propiedades[y][x-1] == 3){
                    color = "success"
                }else if(panel.propiedades[y][x-1] == 4){
                    color = "warning"
                }else{
                    color = " "
                }

                tablaHTML+= `<div class="celda bg-${color}">${panel.propiedades[y][x-1]}</div>`
            }

            tablaHTML+= `</div>`
        }

        document.querySelector('#panel').innerHTML = tablaHTML
    },
}






