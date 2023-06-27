btnCriarEquipe.onclick = function(){
    overlay.classList.add("active");
    modal.classList.add("active");
}

fecharForm.onclick = function(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
}

overlay.onclick = function(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
}

