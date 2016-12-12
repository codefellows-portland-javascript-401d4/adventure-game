const profiles = {};
const dates = {};

profiles.chad = {
  name: 'Chad',
  bio: 'Crush suds. Surf is life.',
  picture: 'http://i.imgur.com/CdbdH0U.png',
  message: 'I know the SICKEST speakeasy. I\'ll buy the first round of Jägerbombs. ',
  yesResponse: 'Sure!',
  noResponse: 'No way.',
  stage1: {
    optionA: {
      response: true,
      description: 'As an equal opportunity drinker, Chad loves beer. Great job. '
    },
    optionB: {
      response: false,
      description: '"Whatever bro, that\'s your choice, but I\'m going to get twice as smashed to make up for it." Oops. '
    }
  },
  stage2: {
    optionA: {
      response: true,
      description: 'Chad welcomes any chance to dominate people in a physical contest. '
    },
    optionB: {
      response: false,
      description: 'Chad has zero emotional intelligence. This was a huge mistake. '
    }
  },
  stage3: {
    optionA: {
      response: false,
      description: 'You decide flee the fight. "Chad can\'t be dating a peace-maker." It\'s unclear why he talks about himself in the third person. '
    },
    optionB: {
      response: true,
      description: 'Chad\'s roid rage propels him into the fight and you both get arrested. You both have the cutest mugshots. '
    }
  }
};

profiles.becky = {
  name: 'Becky',
  bio: 'Lavender is so IN this season.',
  picture: 'http://i.imgur.com/T5WWsmI.jpg?1',
  message: 'I can\'t even!',
  yesResponse: 'ME NEITHER, GIRL',
  noResponse: 'What?',
  stage1: {
    optionA: {
      response: true,
      description: 'Becky can put them away -- great choice. '
    },
    optionB: {
      response: false,
      description: '"What are you trying to say?" Becky glares at you with a mixture of suspicion and disgust. Oops. '
    }
  },
  stage2: {
    optionA: {
      response: false,
      description: '"Games are so lame." Well, that was a mistake. '
    },
    optionB: {
      response: true,
      description: 'She\'s got baggage for days and no therapist. You\'re a great listener. '
    }
  },
  stage3: {
    optionA: {
      response: false,
      description: 'As a self-described "ride-or-die" type girl, Becky is not happy with your cowardice. '
    },
    optionB: {
      response: true,
      description: 'Becky starts pulling hair. She looks oddly at-ease. '
    }
  }
};

profiles.daniel = {
  name: 'Daniel',
  bio: 'I will never take you for granted, M\'lady.',
  picture: 'https://i.imgur.com/bJM641L.png',
  message: '::clears throat:: Oh, hello there. ::glances nervously:: Would you like to go out for some delicious potables and discuss enlightened topics? ::raises eyebrow intriguingly:: ',
  yesResponse: 'Alright',
  noResponse: 'I\'d rather die.',
  stage1: {
    optionA: {
      response: false,
      description: 'Daniel insists on referring to the bartender as "Barkeep" and will not shut up about the history of brewing. You regret ordering anything. '
    },
    optionB: {
      response: true,
      description: '"Water, a glorious libation! I shall follow your lead." Flattering... or something? '
    }
  },
  stage2: {
    optionA: {
      response: false,
      description: 'Daniel gets flustered, but doesn\'t want to show it. His awkward attempt to wield the pool cue results in three smashed pint glasses.  '
    },
    optionB: {
      response: true,
      description: '"This tavern reminds me of The Prancing Pony from the Lord of the Rings. Let me regale you with tales of splendor." '
    }
  },
  stage3: {
    optionA: {
      response: true,
      description: 'You quickly leave the bar. Daniel mutters something like "If only I had my katana...", but you\'re both relieved. '
    },
    optionB: {
      response: false,
      description: 'In a misguided attempt to defend your honor, Daniel ends up in the hospital. Whoops. '
    }
  }
};

profiles.azul = {
  name: 'Azul',
  bio: 'Moon//goddess//crystal//witch',
  picture: 'http://i.imgur.com/3Fh6yIZ.jpg?1',
  message: 'I\'ve recived messages from the crystals that I am ready to go out for drinks. ',
  yesResponse: 'Awesome',
  noResponse: 'Nah I\'m good',
  stage1: {
    optionA: {
      response: false,
      description: '"Everyone knows that alcohol is a kaliedescopic energy suppressant." Well, everyone but you. Live and learn, ya know? '
    },
    optionB: {
      response: true,
      description: '"Cleansing. Pure. Wait, don\'t sip yet, I must finish the incantation." Things are going well. '
    }
  },
  stage2: {
    optionA: {
      response: false,
      description: '"My crystals are informing me of a dark energy coming from that table." You suspect it\'s just the worn-in stale cigarette smell, but you decide not to push the issue. '
    },
    optionB: {
      response: true,
      description: 'Azul offers a palm reading, and you accept. "Yea, this line in your hand tells me that you have a dark past, but a generous spirit." Spookily accurate. '
    }
  },
  stage3: {
    optionA: {
      response: true,
      description: 'Azul offers another grim prophecy about the outcome of the fight, so you decide to leave. '
    },
    optionB: {
      response: false,
      description: 'Ignoring Azul\'s grim prophecy, you enter the fray. Azul closes her eyes and starts casting a spell. You get hit with a bottle and black out. '
    }
  }
};

profiles.doug = {
  name:'Doug',
  bio: 'Work responsibly, play responsibly',
  picture: 'http://i.imgur.com/VsxgYVX.png',
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
  picture: 'http://i.imgur.com/1XsiKTx.png',
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

profiles.becky.next = profiles.daniel;
profiles.becky.stage1.next = profiles.becky.stage2;
profiles.becky.stage2.next = profiles.becky.stage3;

profiles.daniel.next = profiles.carrie;
profiles.daniel.stage1.next = profiles.daniel.stage2;
profiles.daniel.stage2.next = profiles.daniel.stage3;

profiles.carrie.next = profiles.doug;
profiles.carrie.stage1.next = profiles.carrie.stage2;
profiles.carrie.stage2.next = profiles.carrie.stage3;

profiles.doug.next = profiles.azul;
profiles.doug.stage1.next = profiles.doug.stage2;
profiles.doug.stage2.next = profiles.doug.stage3;


profiles.azul.next = profiles.chad;
profiles.azul.stage1.next = profiles.azul.stage2;
profiles.azul.stage2.next = profiles.azul.stage3;

dates.bar.stage1.next = dates.bar.stage2;
dates.bar.stage2.next = dates.bar.stage3;
dates.bar.stage3.next = 'end';

export {profiles, dates};