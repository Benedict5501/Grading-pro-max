function playMusic() {
    var song = new Audio("Zevia.mp3")
    song.play()
}

function calc() {
    playMusic()
    if (studentName.value == '' || biology.value == '' || physics.value == '' || chemistry.value == '' || math.value == '' || geo.value == '' || studentID.value == '' || eng.value == '') {
        err.style.display = "block"
    } else {
        var confirmation = confirm("Are you sure you want to proceed?")
        if (confirmation == true) {
            err.style.display = "none"
            var sum = Number(biology.value) + Number(physics.value) + Number(chemistry.value) + Number(math.value) + Number(geo.value) + Number(eng.value)
            var cumu = ((sum/600) * 100).toFixed(2)
            
            intro.innerHTML = "Welcome " + document.getElementById('studentName').value
            note.innerHTML = "It is my utmost pleasure to sincerely appreciate your efforts for this semester. Please, find below how you have performed. Best regards👋."

            if(cumu >= 0 && cumu <40) {
                result.innerHTML = "Your score is " + cumu + "%. Unfortunately, you will not be progressing to the next level. I will suggest you reconsider your intent to study in our noble institution. Thank you and best wishes.😱😱"
                result.style.color = "red"
            } else if (cumu >= 40 && cumu < 60) {
                result.innerHTML = "Your score is " + cumu + "%. Well done, however, this is not good enough. Please try harder next year🧐, " + studentName.value
                result.style.color = "purple"
            } else if (cumu >= 60 && cumu <70 ) {
                 result.innerHTML = "Your score is " + cumu + "%. Why is your life like this 😒😒."
                 result.style.color = "yellow"
            } else if (cumu >= 70 && cumu <80) {
                result.innerHTML = "Your score is" + cumu + "%. keep it up nice result, u can do better👏👏."
                result.style.color = "orange"
            } else if (cumu >= 80 && cumu <= 100) { 
                result.innerHTML = "Your score is" + cumu + "%. Very Good👍, Respect🧑‍🎓"
                result.style.color = "green"
            } else if (cumu > 100) {
                alert("Scores must not be more than 100 per subject")
            }



            document.getElementById('biology').value = ""
            document.getElementById('studentName').value = ""
            document.getElementById('physics').value = ""
            document.getElementById('chemistry').value = ""
            document.getElementById('math').value = ""
            document.getElementById('geo').value = ""
            document.getElementById('eng').value = ""
            document.getElementById('studentID').value = ""
        } else {
            console.log(("check again"));
        }
    }

}