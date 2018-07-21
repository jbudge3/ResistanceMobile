// Return number of spies in a game according to total number of players
export const getNumberOfSpies = (numberOfPlayers) => {
	if (numberOfPlayers < 7) {
		return 2;
	} else if (numberOfPlayers > 9) {
		return 4;
	} else {
		return 3;
	}
};

// Select a random leader according to total number of players
export const selectRandomLeader = (numberOfPlayers) => {
	return Math.floor(Math.random() * numberOfPlayers) + 1;
};

// Determine how many players are needed for a given mission
export const getNumberNeededForMission = (missionNumber, numberOfPlayers) => {
	switch(missionNumber) {
		case(1):
			return numberOfPlayers > 7 ? 3 : 2;
		case(2):
			return numberOfPlayers > 7 ? 4 : 3;
		case(3):
			switch(numberOfPlayers) {
				case(5):
					return 2;
				case(7):
					return 3;
				default:
					return 4;
			}
		case(4):
			switch(numberOfPlayers) {
				case(5):
					return 3;
				case(6):
					return 3;
				case(7):
					return 4;
				default:
					return 5;
			}
		case(5):
			switch(numberOfPlayers) {
				case(5):
					return 3;
				case(6):
					return 4;
				case(7):
					return 4;
				default:
					return 5;
			}
		default:
			console.log("Something went wrong");
	}
}
