const profiles = {};

profiles.chad = {
  name: 'Chad',
  bio: 'Crush suds. Surf is life.',
  // img: '../src/img/chad-profile.jpg',
  message: 'I know the SICKEST bar, we should go!',
  yesResponse: 'OMG I LOVE THAT PLACE',
  noResponse: 'What is wrong with you?'
};

profiles.becky = {
  name: 'Becky',
  bio: 'basic bitch',
  message: 'pickup line2'
};

profiles.chad.next = profiles.becky;

export {profiles};
