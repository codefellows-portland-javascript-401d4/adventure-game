const profiles = {};
const dates = {};

profiles.chad = {
  name: 'Chad',
  bio: 'Crush suds. Surf is life.',
  picture: 'src/img/chad.png',
  message: 'I know the SICKEST bar, we should go!',
  yesResponse: 'OMG I LOVE THAT PLACE',
  noResponse: 'What is wrong with you?',
  stage1: {
    optionA: {
      response: true,
      description: 'Chad loves beer. Great job.'
    },
    optionB: {
      response: false,
      description: '"Gross, water." Oops.'
    }
  },
  stage2: {
    optionA: {
      response: true,
      description: 'Chad agrees and you play pool.'
    },
    optionB: {
      response: false,
      description: 'Chad has zero emotional intelligence, it\'s a no-go.'
    }
  },
  stage3: {
    optionA: {
      response: false,
      description: 'You leave, but Chad is upset. "Oh hell no, chad can\'t be dating a peace maker."'
    },
    optionB: {
      response: true,
      description: 'Chad enters a roid rage and you both get arrested. He sees no problem with this.'
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
      description: 'Becky can put them away.'
    },
    optionB: {
      response: false,
      description: '"EW." Oops.'
    }
  },
  stage2: {
    optionA: {
      response: false,
      description: '"Games are super lame." Well, that was a mistake.'
    },
    optionB: {
      response: true,
      description: 'Baggage for days and no therapist. She\'s really getting into this.'
    }
  },
  stage3: {
    optionA: {
      response: false,
      description: 'Defend Becky\'s honor or ELSE. She is NOT happy.'
    },
    optionB: {
      response: true,
      description: 'Becky starts pulling hair, and looks oddly at-ease.'
    }
  }
};

dates.bar = {
  location: 'bar',
  text: 'You and your date sit down at the bar, the waiter asks what you want to drink.',
  stage1: {
    text: 'You and your date sit down at the bar, the waiter asks what you want to drink.',
    optionA: 'Order beer',
    optionB: 'Order water'
  },
  stage2: {
    text: 'With drinks in hand, you glance around the bar. You spot a pool table. Should you suggest a game of pool to ease things along, or have a deep conversation instead?',
    optionA: 'Play pool',
    optionB: 'Have a heart to heart'
  },
  stage3: {
    text: 'As the night goes on, you notice some bar patrons are getting into a heated argument. Suddenly, a fight breaks out. ',
    optionA: 'Let\'s get out of here!',
    optionB: 'You\'re out for blood, you punch a random'
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
dates.bar.stage3.next = 'end';

export {profiles, dates};