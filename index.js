const dedications = document.getElementById('dedications')

function rollDedications(dedications) {
    let dedArray = ['diseñar sistemas web', 'crear páginas web', 'diseñar y crear sistemas IoT']
    let idx = 0;
    return function nextDedication(){
        if (idx < dedArray.length){
            dedications.innerHTML= dedArray[idx]
            let d = dedArray[idx]
            idx += 1;
            return d 
        }
        else idx = 0;
    }
}
function run(){
    setInterval(rollDedications(dedications), 3000)
}
window.onload = run
