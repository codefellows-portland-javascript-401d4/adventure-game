const profiles = {};

profiles.chad = {
  name: 'Chad',
  bio: 'Crush suds. Surf is life.',
  message: 'I know the SICKEST bar, we should go!',
  yesResponse: 'OMG I LOVE THAT PLACE',
  noResponse: 'What is wrong with you?',
  date1: {
    optionA: {
      response: true,
      description: 'chad loves beer'
    },
    optionB: {
      response: false,
      description: 'gross, water'
    }

  }
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

const dates = {};

dates.bar = {
  location: 'bar',
  text: 'you and your date sit down at the bar, the waiter asks what you want to drink',
  stage1: {
    optionA: 'order beer',
    optionB: 'order water'
  },
  stage2: {
    optionA: 'play pool',
    optionB: 'have a heart to heart'
  }
};

profiles.chad.next = profiles.becky;
profiles.becky.next = null;

dates.bar.stage1.next = dates.bar.stage2;



export {profiles, dates};

  // img: '../src/img/chad-profile.jpg',