class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;      
  }
  start(printTimeCallback) {
   this.intervalId = setInterval(() =>{
    this.currentTime = this.currentTime + 1;
    if (printTimeCallback){
      printTimeCallback();
    }
   }, 1000);   
  }  
  getMinutes() {
    return Math.floor(this.currentTime / 60)    
  }
  getSeconds() {
    return this.currentTime = this.currentTime % 60;    
  }

  computeTwoDigitNumber(value) {
    const strValue = value.toString();
    const legValue = strValue.split("");
    if (legValue.length === 2){
      return legValue.join("")
    }  else if (legValue.length === 1){
      legValue.unshift("0")
      return legValue.join("")
    }
  }
  stop() {
    clearInterval(intervalId); 
  }

  reset() {
    
  }

  split() {
    
  }
}
