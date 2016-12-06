const profiles = {};
const dates = {};

profiles.chad = {
  name: 'Chad',
  bio: 'Crush suds. Surf is life.',
  message: 'I know the SICKEST speakeasy. I\'ll buy the first round of Jaegerbombs.',
  yesResponse: 'Sure!',
  noResponse: 'No way.',
  stage1: {
    optionA: {
      response: true,
      description: 'As an equal opportunity drinker, Chad loves beer. Great job.'
    },
    optionB: {
      response: false,
      description: '"Whatever bro, that\'s your choice, but I\'m going to get twice as smashed to make up for it." Oops.'
    }
  },
  stage2: {
    optionA: {
      response: true,
      description: 'Chad welcomes any chance to dominate people in a physical contest. Chad is thrilled.'
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
  location: 'St. Tipsy\'s Bar',
  text: 'You walk into a dimly lit bar and spot your date in a booth. As you sit down the server arrives to take your drink order.',
  stage1: {
    text: 'You walk into a dimly lit bar and spot your date in a booth. As you sit down the server arrives to take your drink order.',
    optionA: 'ORDER BEER',
    optionB: 'ORDER WATER'
  },
  stage2: {
    text: 'With a drink in hand, you glance around the bar. You spot a pool table. Should you dig deep into conversation or suggest a game of pool?',
    optionA: 'PLAY POOL',
    optionB: 'HEART-TO-HEART'
  },
  stage3: {
    text: 'The night progresses: the lights grow dimmer, the patrons grow drunker, and the jukebox grows more irritating. Towards the front of the room, a fight breaks out.',
    optionA: 'LEAVE BAR',
    optionB: 'PUNCH SOMEONE'
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