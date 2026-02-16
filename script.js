let isEnvelopeOpen = false;

function toggleEnvelopeState(){

    const envelope = document.getElementsByClassName("envelope")[0];
    const back = document.getElementsByClassName("back")[0];
    // const letter = document.getElementsByClassName("letter")[0];

    // Flipping the envelope

    envelope.classList.toggle("flip");
    if (!isEnvelopeOpen) {
        setTimeout(() => {
            back.classList.toggle("flip");
            envelope.classList.toggle("open-flap");
        }, 500);
    }

    else {
        envelope.classList.toggle("open-flap");
        setTimeout(() => {
            back.classList.toggle("flip");
        }, 500);
    }

    isEnvelopeOpen = !isEnvelopeOpen;
}