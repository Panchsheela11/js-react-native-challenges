

const me = {
  name: "Amit",
  neverMarried: true,
  age: 42,
  education: "Masters - Management",
  community: "Marathi",
  bio:
    "I am putting up this profile on behalf of my Son. He has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Non-Veg"
};

const partner = {
  name: "Savita",
  neverMarried: false,
  age: 41,
  education: "Masters - Marketing",
  community: "Marathi",
  bio:
    "I am putting up this profile on behalf of my daughter. She has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Non-Veg"
};



function checkSameLocation(profileA, profileB) {
  return profileA.location.city === profileB.location.city;
}

function checkSameCommunity(profileA, profileB) {
  return profileA.community === profileB.community;
}

function checkSamecuisine(profileA, profileB){
   return profileA.cuisine === profileB.cuisine;
   
 }

 


function createStarters(currentUser, partner) {
  const starters = [];

  if (checkSameLocation(currentUser, partner)) {
    starters.push(`You both live in ${currentUser.location.city}`);
  }

  if (checkSameCommunity(currentUser, partner)) {
    starters.push(`she is from the ${currentUser.community} community as well`);
  }
  if (checkSamecuisine(currentUser, partner)) {
    starters.push(`You both enjoy same ${currentUser.cuisine} cuisine`);
  }
  return starters;
}


const starters = createStarters(me, partner);

starters.forEach(starter => {
  console.log(starter);
});

