function HouseKeeper (yearsOfExperience, name, cleaningRepertorie ) {
    this.yearsOfExperience= yearsOfExperience;
    this.name = name;
    this.cleaningRepertorie = cleaningRepertorie;
    this.clean = function(){
        console.log("Cleaning In Progress....
        ")
    }
}
var houseKeeper1 = new HouseKeeper(20,"jane", ["bedroom","lobby", "bathroom"])
console.log(houseKeeper1.name)
houseKeeper1.clean();
var houseKeeper2 = new HouseKeeper(9, "Timmy", ["lobby", "bathroom"])
