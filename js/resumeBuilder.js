var bio = {
  "name": "Carlos Ponce",
  "role": "Web Developer",
  "contacts": {
    "email": "jcponce510@gmail.com",
    "mobile": "(510) 427-0986",
    "github": "jcp510",
    "location": "San Francisco"
  },
  "welcomeMessage": "Hello, my name is Carlos, I am a San Francisco based web developer.",
  "skills": ["html", "css", "javascript", "jQuery", "git version control"],
  "pic": "images/profile.jpg",
  "display": function() {
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').append(formattedEmail);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts').append(formattedMobile);
    var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(formattedGitHub);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append(formattedLocation);
    var formattedPic = HTMLbioPic.replace('%data%', bio.pic);
    $('#header').append(formattedPic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcomeMessage);
    //does it matter whether the skills list is horizontal or vertical?
    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkill);
      };
    };
  }
};
bio.display();

var work = {
  "jobs": [
    {
      "employer": "Bio-Rad",
      "title": "Accounts Payable Processor",
      "location": "Hercules, CA",
      "dates": "in progress",
      "description": ""
    },
    {
      "employer": "Signature Flooring & Design",
      "title": "Accounting Clerk",
      "location": "Fremont, CA",
      "dates": "",
      "description": ""
    },
    {
      "employer": "Washington Mutual",
      "title": "Personal Financial Representative",
      "location": "Oakland, CA",
      "dates": "",
      "description": ""
    },
    {
      "employer": "US Navy",
      "title": "Propulsion Mechanic",
      "location": "USS Nimitz CVN-68",
      "dates": "",
      "description": ""
    }
  ],
  "display": function () {
    for (i in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
      var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
      $('.work-entry:last').append(formattedEmployerWorkTitle, formattedLocation, formattedDates, formattedDescription);
    };
  }
};
work.display();

var projects ={
  "projects": [
    {
      "title": "Family Tree",
      "dates": "Coming Soon",
      "description": "For mapping your ancestry.",
      "images": []
    },
    {
      "title": "Places of Interest",
      "dates": "Coming Soon",
      "description": "For cataloging your favorite places or establishments.",
      "images": []
    },
    {
      "title": "Secret Santa",
      "dates": "Coming Soon",
      "description": "For organizing gift exchanges.",
      "images": []
    }
  ],
  "display": function () {
    for (i in projects.projects) {
      $('#projects').append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);
      $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
    };
  }
};
projects.display();
/*
var education = {
  "schools": [
    {
      "name": "General Assembly",
      "location": "San Francisco, CA",
      "degree": "",
      "major": "Web Development Immersive",
      "dates": "2015",
      "url": "https://generalassemb.ly/"
   },
    {
      "name": "California State University, East Bay",
      "location": "Hayward, CA",
      "degree": "BA",
      "major": "Economics with Accounting Option",
      "dates": "2006 - 2010",
      "url": "http://www.csueastbay.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/"
    }
  ],
  "display": function() {
    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools.name);
    var formattedShoolLocation = HTMLschoolLocation.replace('%data%', education.schools.location);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools.degree);
    var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools.major);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools.dates);
    if (education.schools.length > 0) {
      $('#education').append(HTMLschoolStart);
    }
  }
};
*/
