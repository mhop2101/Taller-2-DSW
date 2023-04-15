import { Serie, series } from "./serie.js";

let myTable = document.getElementById("mytbody") as HTMLTableElement;
let mySpan = document.getElementById("avergae") as HTMLSpanElement;
let myImg = document.getElementById("cardImg") as HTMLImageElement;
let myCardTitle = document.getElementById("cardTitle") as HTMLHeadingElement;
let myCardText = document.getElementById("cardText") as HTMLParagraphElement;
let myCardLink = document.getElementById("cardLink") as HTMLAnchorElement;

export function fillCardData(clickedName:string|null, series:Serie []):void{
    let index:number = 0;
    for (let indexA = 0; indexA < series.length; indexA++) {
        let nombre = series[indexA].nombre;
        if (clickedName == nombre) {
            index = indexA;
        }
    }
    myImg.src = series[index].imagen;
    myCardTitle.innerText = series[index].nombre;
    myCardText.innerText = series[index].descripcion;
    myCardLink.href = series[index].link;
    myCardLink.innerText = series[index].link;
}

fillCardData(series[0].nombre, series);





function fillTables() : void {
    for (let index = 0; index < series.length; index++) {
        
        myTable.innerHTML += `<tr>
                                <td> ${series[index].id} </td>
                                <td>  <a href="#"> <span>${series[index].nombre}</span></a> </td>
                                <td> ${series[index].canal} </td>
                                <td> ${series[index].temporadas} </td>
                            </tr>`;
        
    }
    
}

fillTables();

function calculateSeasonAverage(series:Serie[]) : number{
    let average : number = 0;
    for (let index = 0; index < series.length; index++) { average += series[index].temporadas}
    average = average/series.length;
    return average;
}

mySpan.innerText = calculateSeasonAverage(series).toString();




const tdElements = document.querySelectorAll('tr');

tdElements.forEach((tr: HTMLElement) => {
  tr.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLElement && event.target.tagName === 'SPAN') {
        
      fillCardData(event.target.textContent, series);
    }
  });
});

