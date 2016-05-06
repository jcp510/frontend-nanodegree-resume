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
work.currentPosition = HTMLworkTitle.replace("%data%", "Accounts Payable Processor");
work.currentEmployer = "Bio-Rad";
work.currentYears = "1";
work.currentCity = "Hercules, CA";
var education = {};
education["name"] = "California State University, East Bay";
education["years"] = "2006 - 2010";
education["city"] = "Hayward, CA";
$("#workExperience").append(work["currentPosition"]);
