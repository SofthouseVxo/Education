var pupils = [];

function populatePupils() {
    pupils.push('Kalle');
    pupils.push('Stina')
}

function logPupils() {
    pupils.forEach(function(pupil){
        console.log(pupil);
    })
}

function main(){
    logPupils();
    populatePupils();
}

main();