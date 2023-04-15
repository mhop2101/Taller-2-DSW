import { series } from "./serie.js";
var myTable = document.getElementById("mytbody");
var mySpan = document.getElementById("avergae");
var myImg = document.getElementById("cardImg");
var myCardTitle = document.getElementById("cardTitle");
var myCardText = document.getElementById("cardText");
var myCardLink = document.getElementById("cardLink");
export function fillCardData(clickedName, series) {
    var index = 0;
    for (var indexA = 0; indexA < series.length; indexA++) {
        var nombre = series[indexA].nombre;
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
function fillTables() {
    for (var index = 0; index < series.length; index++) {
        myTable.innerHTML += "<tr>\n                                <td> ".concat(series[index].id, " </td>\n                                <td>  <a href=\"#\"> <span>").concat(series[index].nombre, "</span></a> </td>\n                                <td> ").concat(series[index].canal, " </td>\n                                <td> ").concat(series[index].temporadas, " </td>\n                            </tr>");
    }
}
fillTables();
function calculateSeasonAverage(series) {
    var average = 0;
    for (var index = 0; index < series.length; index++) {
        average += series[index].temporadas;
    }
    average = average / series.length;
    return average;
}
mySpan.innerText = calculateSeasonAverage(series).toString();
var tdElements = document.querySelectorAll('tr');
tdElements.forEach(function (tr) {
    tr.addEventListener('click', function (event) {
        if (event.target instanceof HTMLElement && event.target.tagName === 'SPAN') {
            fillCardData(event.target.textContent, series);
        }
    });
});
