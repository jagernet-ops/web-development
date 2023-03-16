// const robot = {
//     model: 'B-4MI',
//     mobile: true,
//     greeting() {
//         console.log(`I'm model ${this.model}, how may I be of service?`);
//     }
//   }
  
//   const massProdRobot = (model, mobile) => {
//     return {
//       model,
//       mobile,
//       greeting() {
//         console.log(`I'm model ${this.model}, how may I be of service?`);
//       }
//     }
//   }
  
//   const shinyNewRobot = massProdRobot('TrayHax', true)
  
//   const chargingStation = {
//     _name: 'Electrons-R-Us',
//     _robotCapacity: 120,
//     _active: true,
//     _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  
//     set robotCapacity(newCapacity) {
//       if (typeof newCapacity === 'number') {
//         this._robotCapacity = newCapacity;
//       } else {
//         console.log(`Change ${newCapacity} to a number.`)
//       }
//     },
//     get robotCapacity() {
//       return this._robotCapacity;
//     }
//   }

// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     provideInfo() {
//       return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
//    }
// };

// console.log(robot.provideInfo());

// const robot = {
//     energyLevel: 100,
//     checkEnergy() {
//       console.log(`Energy is currently at ${this.energyLevel}%.`)
//     }
//   }
  
//   robot.checkEnergy();

// const robot = {
//     _energyLevel: 'high',
//     recharge(){
//       this._energyLevel += 30;
//       console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
//     }
//   };
// robot.recharge();  

// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     get energyLevel(){
//         if(typeof this._energyLevel){
//             return `My current energy level is ${this._energyLevel}`;
//         }else{
//             return 'System malfunction: cannot retrieve energy level';
//         }
//     }
//   };
  
// console.log(robot.energyLevel);
  
  
// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     _numOfSensors: 15,
//     get numOfSensors(){
//       if(typeof this._numOfSensors === 'number'){
//         return this._numOfSensors;
//       } else {
//         return 'Sensors are currently down.'
//       }
//     },
//     set numOfSensors(num){
//         if(typeof num === 'number' && num >= 0){
//             this._numOfSensors = num;
//         }else{
//             console.log('Pass in a number that is greater than or equal to 0');
//         }
//     }
    
//   };

// robot.numOfSensors = 100;
// console.log(robot.numOfSensors);

// const robotFactory = (model, mobile) => {
//   return {
//     model,
//     mobile,
//     beep() {
//       console.log('Beep Boop');
//     }
//   }
// }

// // To check that the property value shorthand technique worked:
// const newRobot = robotFactory('P-501', false)
// console.log(newRobot.model)
// console.log(newRobot.mobile)

// const robot = {
//   model: '1E78V2',
//   energyLevel: 100,
//   functionality: {
//     beep() {
//       console.log('Beep Boop');
//     },
//     fireLaser() {
//       console.log('Pew Pew');
//     },
//   }
// };

// const { functionality } = robot;
// functionality.beep();

// const robot = {
// 	model: 'SAL-1000',
//   mobile: true,
//   sentient: false,
//   armor: 'Steel-plated',
//   energyLevel: 75
// };

// // What is missing in the following method call?
// const robotKeys = Object.keys(robot);

// console.log(robotKeys);

// // Declare robotEntries below this line:
// const robotEntries = Object.entries(robot);


// console.log(robotEntries);

// // Declare newRobot below this line:
// const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

// console.log(newRobot);