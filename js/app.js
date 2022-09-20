if(navigator.serviceWorker){
    console.log("Si lo soporta");
    navigator.serviceWorker.register('./sw.js');
}else{
    console.log("No lo soporta")
}