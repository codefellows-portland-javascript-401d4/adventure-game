const profiles = {};
const dates = {};

profiles.chad = {
  name: 'Chad',
  bio: 'Crush suds. Surf is life.',
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

profiles.doug = {
  name:'Doug',
  bio: 'Work responsibly, play responsibly',
  message:'You are attractive. We should go out',
  yesResponse: 'The strong silent type, I like it',
  noResponse: 'SNORE',
  stage1: {
    optionA: {
      response: false,
      description: 'Doug thinks you have a drinking problem and give you an AA pamphlet. ',
    },
    optionB: {
      response: true,
      description: '"this water is great! So flavorful" Doug finishes his glass and orders another. '
    }
  },
  stage2: {
    optionA: {
      response: false,
      description: '"Let\'s leave sports to the professional athletes." You sit in silence for an uncomfortable amount of time. '
    },
    optionB: {
      response: true,
      description: 'This is the longest conversation Doug has had in a while, and he\'s thrilled. '
    }
  },
  stage3: {
    optionA: {
      response: true,
      description: 'Doug appears to be very relieved that you\'re leaving the bar. '
    },
    optionB: {
      response: false,
      description: 'Doug accidentally get\'s thrown in the fray and is knocked unconcious. '
    }
  }
};

profiles.carrie = {
  name: 'Carrie',
  bio: 'I\'m doing my best',
  message: 'My mom is making me do this',
  yesResponse: 'Your mom will LOVE me',
  noResponse: 'she shouldn\'t have. you gross',
  stage1: {
    optionA: {
      response: true,
      description: '"maybe if I drink enough it will make the date go by faster." Yep, she said that out loud. '
    },
    optionB: {
      response: false,
      description: '"We can\'t both be the boring one." '
    }
  },
  stage2: {
    optionA: {
      response: true,
      description: '"Good idea, you\'re cuter when you don\'t talk." But she genuinely has a good time. '
    },
    optionB: {
      response: false,
      description: 'She talks about her turtle\'s fungal infection for an hour. ' 
    }
  },
  stage3: {
    optionA: {
      response: true,
      description: '"I\'d like to see the fight, but I need to get back to my chopstick collection." '
    },
    optionB: {
      response: false,
      description: 'The most interesting part about Carrie is that she\'s a championship boxer and beats you up. '
    }
  }

  
};

dates.bar = {
  location: 'bar',
  text: 'you and your date sit down at the bar, the waiter asks what you want to drink',
  stage1: {
    text: '',
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

profiles.becky.next = profiles.doug;
profiles.becky.stage1.next = profiles.becky.stage2;
profiles.becky.stage2.next = profiles.becky.stage3;

profiles.doug.next = profiles.carrie;
profiles.doug.stage1.next = profiles.doug.stage2;
profiles.doug.stage2.next = profiles.doug.stage3;

profiles.carrie.next = null;
profiles.carrie.stage1.next = profiles.carrie.stage2;
profiles.carrie.stage2.next = profiles.carrie.stage3;

dates.bar.stage1.next = dates.bar.stage2;
dates.bar.stage2.next = dates.bar.stage3;
dates.bar.stage3.next = 'end';

export {profiles, dates};