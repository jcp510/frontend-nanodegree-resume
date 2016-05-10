var formattedName = HTMLheaderName.replace("%data%", "Carlos Ponce");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Carlos Ponce",
  "role": "Web Developer",
  "contact": {
    "email": "jcponce510@gmail.com",
    "mobile": "(510) 427-0986",
    "github": "jcp510",
    "location": "San Francisco East Bay"
  },
  "welcomeMessage": "Hello, my name is Carlos, I am a San Francisco Bay Area based web developer.",
  "skills": ["html", "css", "javascript", "git version control"],
  "biopic": "images/profile.jpg",
  "display": ;
};

$("#topContacts").append(bio.contact.mobile);
$("#topContacts").append(bio.contact.email);
$("#topContacts").append(bio.contact.github);

$("#header").append(bio.picture);
$("#header").append(bio.welcomeMsg);

var work = {
  "jobs": [
    {
      "employer": "Bio-Rad",
      "title": "Accounts Payable Processor",
      "location": "Hercules, CA",
      "dates": "in progress",
      "description": ""
    }
  ],
  "display": ;
};

var education = {
  "schools": [
    {
      "name": "Udacity",
      "city": "Online",
      "degree": "Nanodegree",
      "major": "Front End Web Developer",
      "minor": "",
      "gradYr": "2016"
   },
    {
      "name": "General Assembly",
      "city": "San Francisco, CA",
      "degree": "",
      "major": "Web Development Immersive",
      "minor": "",
      "gradYr": "2015"
    },
    {
      "name": "California State University, East Bay",
      "city": "Hayward, CA",
      "degree": "BA",
      "major": "Economics",
      "minor": "Accounting",
      "gradYr": "2010"
    }
  ]
};

$("#workExperience").append(HTMLworkStart);

$("#education").append(HTMLschoolStart);
