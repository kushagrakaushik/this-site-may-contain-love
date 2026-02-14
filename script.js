function flip(){
    const envelope = document.getElementsByClassName("envelope")[0];
    envelope.classList.toggle("flip");
    
    setTimeout(() => {
        envelope.classList.add("open-flap");
    }, 1000);
}