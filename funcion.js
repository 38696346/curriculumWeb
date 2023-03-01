window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        document.getElementById("ilustracion").classList.add("barra-progreso1");
        document.getElementById("photoshop").classList.add("barra-progreso2");
        document.getElementById("diseño").classList.add("barra-progreso3");
        document.getElementById("teoria").classList.add("barra-progreso4");
        document.getElementById("administracion").classList.add("barra-progreso5");
    }
}