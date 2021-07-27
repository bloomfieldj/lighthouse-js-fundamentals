const chooseStations = function (stations) {
  let goodStations  = []
  
  let votingStations = []
  
  for(let station of stations){
    
    if (station[1] >= 20 && (station[2] === 'school' | station[2] === 'community centre')){
      
      votingStations.push(station[0]);
      
    }
    
    goodStations = votingStations
    
    
  }
  
  return(goodStations)
}