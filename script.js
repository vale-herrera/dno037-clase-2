var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
var elSaludo; 
if (5 < laHora && laHora < 12) {
    elSaludo = "Good morning! ٩(｡•́‿•̀｡)۶";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Good afternoon! (´ ε ` )♡";
} else {
    elSaludo = "Good night! (－_－) zzZ";
}
var elColor;

function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);

    background(255, 243, 252);

    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    createA("artist.html", "picture").parent("vinculos");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 7, 4).parent("controles");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }

}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". Right now you are in index.html ☆・*。").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#a695e3");
}
function pagina() {
    createSpan(". Right now you are in page.html °。☆ *").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#a695e3");
}
