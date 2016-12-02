const profiles = {};

profiles.chad = {
  name: 'Chad',
  bio: '../img/chad-profile.jpg',
  message: 'pickup line'
};

profiles.becky = {
  name: 'Becky',
  bio: 'basic bitch',
  message: 'pickup line2'
};

profiles.chad.next = profiles.becky;

export default { profiles };
