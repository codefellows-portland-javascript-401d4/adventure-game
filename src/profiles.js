const profiles = {};

profiles.chad = {
  name: 'Chad',
  bio: 'Crush suds. Surf is life.',
  message: 'I know the SICKEST bar, we should go!',
  yesResponse: 'OMG I LOVE THAT PLACE',
  noResponse: 'What is wrong with you?',
  stage1: {
    optionA: {
      response: true,
      description: 'chad loves beer'
    },
    optionB: {
      response: false,
      description: 'gross, water'
    }
  },
  stage2: {
    optionA: {
      response: true,
      description: 'chad agrees and you play pool'
    },
    optionB: {
      response: false,
      description: 'chad has zero emotional intelligence, it\'s a no-go'
    }
  },
  stage3: {
    optionA: {
      response: false,
      description: 'oh hell no, chad can\'t be dating a peace maker'
    },
    optionB: {
      response: true,
      description: 'chad enters a roid rage and you both get arrested'
    }
  }
};

profiles.becky = {
  name: 'Becky',
  bio: 'Horses, Cosmos, and UGGS',
  message: 'I can\'t even',
  yesResponse: 'ME NEITHER GIRL',
  noResponse: 'What?',
  stage1: {
    optionA: {
      response: true,
      description: 'becky can put them away'
    },
    optionB: {
      response: false,
      description: 'EW.'
    }
  },
  stage2: {
    optionA: {
      response: false,
      description: 'games are super lame'
    },
    optionB: {
      response: true,
      description: 'baggage for days and no therapist'
    }
  },
  stage3: {
    optionA: {
      response: false,
      description: 'defend becky\'s honor or ELSE'
    },
    optionB: {
      response: true,
      description: 'becky starts pulling hair'
    }
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
  },
  stage3: {
    optionA: 'let\'s get out of here!',
    optionB: 'you\'re out for blood, you punch a random'
  }
};

profiles.chad.next = profiles.becky;
profiles.chad.stage1.next = profiles.chad.stage2;
profiles.chad.stage2.next = profiles.chad.stage3;

profiles.becky.next = null;
profiles.becky.stage1.next = profiles.becky.stage2;
profiles.becky.stage2.next = profiles.becky.stage3;

dates.bar.stage1.next = dates.bar.stage2;
dates.bar.stage2.next = dates.bar.stage3;



export {profiles, dates};

  // img: '../src/img/becky-profile.jpg',