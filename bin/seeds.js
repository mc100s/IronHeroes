// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Helpcall = require("../models/Helpcall")
require('dotenv').config();

const bcryptSalt = 10;

mongoose
  .connect(process.env.DATABASE_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

let users = [
  {
    username: 'Spiderman',
    password: bcrypt.hashSync('spider', bcrypt.genSaltSync(bcryptSalt)),
    email: 'spider@man.com',
    confirmationCode: '00001',
    status: 'Active',
    pictureUrl: '/images/spiderman.png',
    isSuperHero: true,
    skills: ['wrist web-shooters', 'cling to most solid surfaces']
  },
  {
    username: 'Aaronman',
    password: bcrypt.hashSync('pepper', bcrypt.genSaltSync(bcryptSalt)),
    email: 'iron@man.com',
    confirmationCode: '00002',
    status: 'Active',
    pictureUrl: '/images/IH_Jan1930.jpg',
    // 'https://b.kisscc0.com/20180720/wve/kisscc0-iron-man-s-armor-spider-man-download-ironman-5b526c7f38b4b3.9306334015321283832323.jpg',
    isSuperHero: true,
    skills: [
      'supersonic flight',
      'regenerative life support',
      'energy repulsor',
      'recaps'
    ]
  },
  {
    username: 'Thor',
    password: bcrypt.hashSync('hammer', bcrypt.genSaltSync(bcryptSalt)),
    email: 'thor@thor.com',
    confirmationCode: '00003',
    status: 'Active',
    pictureUrl:
      'https://scontent-lhr3-1.cdninstagram.com/vp/bc749ae7a0d25e13c953cc7062bcfaa2/5CFF01AA/t51.2885-15/e35/47692377_2004214382998139_1864336324419116359_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTk1MzAwNDUyMzg5NTUwODI5OA%3D%3D.2',
    isSuperHero: true,
    skills: [
      'weather manipulation',
      'flight',
      'dimensional transportation',
      'electric manipulation',
      'jQuery'
    ]
  },
  {
    username: 'Makes-Sense',
    password: bcrypt.hashSync('42', bcrypt.genSaltSync(bcryptSalt)),
    email: 'makes@sense.com',
    confirmationCode: '00004',
    status: 'Active',
    pictureUrl:
      'https://pbs.twimg.com/profile_images/802537394901778432/EFsZ7VQm_400x400.jpg',
    isSuperHero: true,
    skills: ['set pupils into coding trance', 'solving complex tasks']
  },
  {
    username: 'Batman',
    password: bcrypt.hashSync('bat', bcrypt.genSaltSync(bcryptSalt)),
    email: 'bat@man.com',
    confirmationCode: '00005',
    status: 'Active',
    pictureUrl:
      'https://chrisjohnsdesign.nyc3.digitaloceanspaces.com/nerddomepodcast.com/2016/06/Batman-Rebirth-banner-e1459450194577.jpg',
    isSuperHero: true,
    skills: [
      'rich',
      'martial artist',
      'expert detective',
      'high-tech equipment'
    ]
  },
  {
    username: 'Mario',
    password: bcrypt.hashSync('yoshi', bcrypt.genSaltSync(bcryptSalt)),
    email: 'super@mario.com',
    confirmationCode: '00006',
    status: 'Active',
    pictureUrl:
      'http://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/ec/13/72/ec137292-f2be-9f55-3be7-bbdffb73f49a/mzl.vrvgkxus.png/1200x630bb.jpg',
    isSuperHero: true,
    skills: ['plumbing', "cleaning pipes", 'effective on mushrooms']
  },
  {
    username: 'Wonderwoman',
    password: bcrypt.hashSync('feminism', bcrypt.genSaltSync(bcryptSalt)),
    email: 'wonder@woman.com',
    confirmationCode: '00007',
    status: 'Active',
    pictureUrl:
      'https://media.wired.com/photos/59375820fbdfa3763bab97ae/master/w_1440,c_limit/GalleryComics_1920x1080_20170531_WW-Annual-1_5903bbd4d223b6.50778583TA.jpg',
    isSuperHero: true,
    skills: ['woman who codes', 'Lasso of Truth']
  },
  {
    username: 'Superaxel',
    password: bcrypt.hashSync('axe', bcrypt.genSaltSync(bcryptSalt)),
    email: 'axel@ironhack.com',
    confirmationCode: '00008',
    status: 'Active',
    pictureUrl:
      'https://media.licdn.com/dms/image/C5603AQE8A6X5t1-9rQ/profile-displayphoto-shrink_800_800/0?e=1555545600&v=beta&t=5_RKYMfOCeUZUV_u2oeBsoSZ8x0d8S4yhfOWXpL2sII',
    isSuperHero: true,
    skills: ['linux', 'canvas', 'google']
  },
  {
    username: 'Kong',
    password: bcrypt.hashSync('banana', bcrypt.genSaltSync(bcryptSalt)),
    email: 'donkey@kong.com',
    confirmationCode: '00009',
    status: 'Active',
    pictureUrl: 'https://www.smashlabs.de/wcf/attachment/6661-2-1iz5xd2-png/',
    isSuperHero: true,
    skills: ['strong', 'clumsy', "wreckful"]
  },
  {
    username: 'Ruby',
    password: bcrypt.hashSync('ruby', bcrypt.genSaltSync(bcryptSalt)),
    email: 'ruby@rub.com',
    confirmationCode: '00010',
    status: 'Active',
  },
  {
    username: 'Julia',
    password: bcrypt.hashSync('julia', bcrypt.genSaltSync(bcryptSalt)),
    email: 'julia@jul.com',
    confirmationCode: '00011',
    status: 'Active',
  },
  {
    username: 'Java',
    password: bcrypt.hashSync('java', bcrypt.genSaltSync(bcryptSalt)),
    email: 'java@jav.com',
    confirmationCode: '00012',
    status: 'Active',
  },
];

User.deleteMany()
  .then(() => Helpcall.deleteMany())
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));


    let helpcalls = [
      {
        subject: "No coffee on 20th floor",
        details: "Please check the water pipes",
        status: 'Claimed',
        //  reference to the superhero
        _superhero: usersCreated[5]._id, // The 5th user _id (mario)
        // reference to the requestor
        _owner: usersCreated[usersCreated.length - 1]._id, // The last user _id
      },
    ];

    return Helpcall.create(helpcalls);
  })
  .then(helpcallsCreated => {
    console.log(`${helpcallsCreated.length} helpcalls created with the following id:`);
    console.log(helpcallsCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
