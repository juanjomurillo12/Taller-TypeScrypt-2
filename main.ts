import { series } from "./Data.js";
import { Serie } from "./Serie.js";

const seriesTableBody: HTMLElement = document.getElementById("tabla_series_body")!;
const seriesDetailCard = document.getElementById("series-detail")!;
const seriesImage = document.getElementById("series-image") as HTMLImageElement;
const seriesTitle = document.getElementById("series-title")!;
const seriesDescription = document.getElementById("series-description")!;
const seriesLink = document.getElementById("series-link") as HTMLAnchorElement;


function renderSeries(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td><a href="#" class="series-link" data-id="${serie.id}">${serie.name}</a></td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTableBody.appendChild(trElement);
    });

    
    document.querySelectorAll(".series-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const serieId = parseInt((event.currentTarget as HTMLElement).getAttribute("data-id")!);
            displaySeriesDetails(serieId);
        });
    });
}

function displaySeriesDetails(serieId: number): void {
    const serie = series.find(s => s.id === serieId);
    if (serie) {
        // Set image source and series details
        seriesImage.src = serie.image;
        seriesTitle.textContent = serie.name;
        seriesDescription.textContent = serie.description;

        // Set the href and target attributes of the link
        seriesLink.textContent = serie.link;
        seriesLink.setAttribute("href", serie.link); // Set the href to the link from the series object
        seriesLink.setAttribute("target", "_blank"); // Open in a new tab

        // Display the detail card
        seriesDetailCard.style.display = "block";
    }
}




// Llamar a la función para renderizar las series
renderSeries(series);
