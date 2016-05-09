var formattedName = HTMLheaderName.replace("%data%", "Carlos Ponce");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = HTMLskills.replace("%data%", '["html", "css", "javascript", "git version control"]');

var bio = {
  "name": "Carlos Ponce",
  "role": "Web Developer",
  "contact": {
    "email": HTMLemail.replace("%data%", "jcponce510@gmail.com"),
    "mobile": HTMLmobile.replace("%data%", "(510) 427-0986"),
    "github": HTMLgithub.replace("%data%", "jcp510")
  },
  "picture": HTMLbioPic.replace("%data%", "images/profile.jpg"),
  "welcomeMsg": HTMLwelcomeMsg.replace("%data%", "Hello, my name is Carlos, I am a San Francisco Bay Area based web developer."),
  "skills": HTMLskills.replace("%data%", skills)
};

$("#topContacts").append(bio.contact.mobile);
$("#topContacts").append(bio.contact.email);
$("#topContacts").append(bio.contact.github);

$("#header").prepend(bio.picture);
$("#header").append(bio.welcomeMsg);

var work = {};
work.position = HTMLworkTitle.replace("%data%", "Accounts Payable Processor");
work.employer = "Bio-Rad";
work.years = "1";
work.city = "Hercules, CA";

var education = {
  "schools": [
    {"name": "Udacity",
     "city": HTMLschoolLocation.replace("%data%", "Online"),
     "degree": HTMLschoolDegree.replace("%data%", "Nanodegree"),
     "major": HTMLschoolMajor.replace("%data%", "Front End Web Developer"),
     "minor": "",
     "gradYr": "2016"
   },
    {"name": HTMLschoolName.replace("%data%", "General Assembly"),
     "city": HTMLschoolLocation.replace("%data%", "San Francisco, CA"),
     "degree": "",
     "major": HTMLschoolMajor.replace("%data%", "Web Development Immersive"),
     "minor": "",
     "gradYr": "2015"
    },
    {"name": HTMLschoolName.replace("%data%", "California State University, East Bay"),
     "city": HTMLschoolLocation.replace("%data%", "San Francisco"),
     "degree": HTMLschoolDegree.replace("%data%", "BA"),
     "major": HTMLschoolMajor.replace("%data%", "Economics"),
     "minor": "Accounting",
     "gradYr": "2010"
    }
  ]
};

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(work["position"]);

$("#education").append(HTMLschoolStart);
$("#education").append(education.schools);