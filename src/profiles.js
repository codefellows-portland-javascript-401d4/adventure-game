const profiles = {};

profiles.chad = {
  name: 'Chad',
  bio: 'Crush suds. Surf is life.',
  message: 'I know the SICKEST bar, we should go!',
  yesResponse: 'OMG I LOVE THAT PLACE',
  noResponse: 'What is wrong with you?',
  whoPays: 
};

profiles.becky = {
  name: 'Becky',
  bio: 'Horses, Cosmos, and UGGS',
  message: 'I can\'t even',
  yesResponse: 'ME NEITHER GIRL',
  noResponse: 'What?'
};

profiles.dates = {
  whoPays: {
    chad: true,
    becky: false
  }
};

profiles.chad.next = profiles.becky;
profiles.becky.next = null;

export {profiles};

  // img: '../src/img/chad-profile.jpg',