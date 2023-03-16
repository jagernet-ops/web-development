let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let runnerAge = 22;
if(runnerAge > 18 && isEarly == true){
  raceNumber += 1000;
}
if(raceNumber >= 1000){
  console.log(`${raceNumber}: Your time will be at 9:30am.`);
}else if(raceNumber < 1000 && isEarly == false){
  console.log(`${raceNumber}: Your time will be at 11:00am.`);
}else if(age < 18){
  console.log(`${raceNumber}: All youths run at 12:30pm.`);
}else{
  console.log('Please see help desk for further information');
}
