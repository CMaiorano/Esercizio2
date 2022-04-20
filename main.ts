/**
 * EXERCIZIO 1:
 * Concatena le seguenti costanti utilizzando i template literals (backtick ``)
 * allo scopo di creare la seguente stringa:
 *
 * GOAL
 * Ottenere la seguente stringa: http://localhost:3000/api/users/12
 */

const server = 'http://localhost:3000';
const endpoint = 'api/users';
const id = 12;

export const result = `${server}/${endpoint}/${id}`; 

console.log(result); // print on console
document.querySelector('#output').innerHTML = result; // print HTML 

/**
 * ESERCIZIO 2:
 * contatena le seguenti stringhe per visualizzare una Mappa statica di MapQuest
 *
 * GOAL
 * Ottenere seguente stringa:
 * https://www.mapquestapi.com/staticmap/v5/map?key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn&size=200,100&center=Trieste
 * (puoi aprire il link nel browser per verificare che la mappa sia generata)
 */

const API = 'https://www.mapquestapi.com/staticmap/v5/map?size=200,100';
const TOKEN = '&key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn';
const city = '&center=Trieste';

const mapURL = `${API}${city}${TOKEN}`
document.querySelector('img').src = mapURL;
