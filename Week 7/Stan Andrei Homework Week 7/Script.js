console.log("It is working !");

var root = 'https://rickandmortyapi.com/api/character';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/character/1';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/character/4';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/character/8';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/location';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/location/3';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/location/6';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/location/1';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/episode';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/episode/23';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/episode/15';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});

var root = 'https://rickandmortyapi.com/api/episode/7';
fetch(root, {
method: 'GET'
}).then(function(response){
return response.json();
}).then(function(jsonResp) {
console.log(jsonResp);
});