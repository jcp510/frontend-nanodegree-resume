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
  "biopic": "images/profile.jpg",
  "display": function() {
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedRole, formattedName);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts, #footerContacts').append(formattedEmail, formattedMobile, formattedGitHub, formattedLocation);
    var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedPic, formattedWelcomeMessage);
    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkill);
      }
    }
  }
};
bio.display();

var work = {
  "jobs": [{
    "employer": "Bio-Rad",
    "title": "Accounts Payable Processor",
    "location": "Hercules, CA",
    "dates": "in progress",
    "description": "Yada yada yada."
  }, {
    "employer": "Signature Flooring & Design",
    "title": "Accounting Clerk",
    "location": "Fremont, CA",
    "dates": "ABY",
    "description": "Schpiel schpiel schpiel."
  }, {
    "employer": "Washington Mutual",
    "title": "Personal Financial Representative",
    "location": "Oakland, CA",
    "dates": "A long time ago, in a galaxy far, far away.",
    "description": "Blah blah blah."
  }, {
    "employer": "US Navy",
    "title": "Propulsion Mechanic",
    "location": "USS Nimitz CVN-68",
    "dates": "BBY",
    "description": "Wah wah mwah mwah, or whatever Charlie Brown's teacher says in the Peanuts cartoons."
  }],
  "display": function() {
    for (var i = 0; i < work.jobs.length; i++) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
      var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
      $('.work-entry:last').append(formattedEmployerWorkTitle, formattedLocation, formattedDates, formattedDescription);
    }
  }
};
work.display();

var projects = {
  "projects": [{
    "title": "Family Tree",
    "dates": "Coming Soon",
    "description": "For mapping your ancestry.",
    "images": ["build/images/Darth_Vader-w200.jpg"]
  }, {
    "title": "Places of Interest",
    "dates": "Coming Soon",
    "description": "For cataloging your favorite places or establishments.",
    "images": ["build/images/BobaFettMain2-w200.jpg"]
  }, {
    "title": "Secret Santa",
    "dates": "Coming Soon",
    "description": "For organizing gift exchanges.",
    "images": ["build/images/Jabba_SWSB-w200.png"]
  }],
  "display": function() {
    for (var i = 0; i < projects.projects.length; i++) {
      $('#projects').append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);
      $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
    }
  }
};
projects.display();

var education = {
  "schools": [{
    "name": "General Assembly",
    "location": "San Francisco, CA",
    "degree": "",
    "majors": "Web Development Immersive",
    "dates": "2015",
    "url": "https://generalassemb.ly/"
  }, {
    "name": "California State University, East Bay",
    "location": "Hayward, CA",
    "degree": "BA",
    "majors": "Economics with Accounting Option",
    "dates": "2006 - 2010",
    "url": "http://www.csueastbay.edu"
  }],
  "onlineCourses": [{
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
  }, {
    "title": "Responsive Web Design Fundamentals",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
  }, {
    "title": "Responsive Images",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/responsive-images--ud882"
  }, {
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/javascript-basics--ud804"
  }],
  "display": function() {
    for (var i = 0; i < education.schools.length; i++) {
      $('#education').append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
      var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
      var formattedShoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
      var formattedSchoolMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
      $('.education-entry:last').append(formattedSchoolNameDegree, formattedSchoolDates, formattedShoolLocation, formattedSchoolMajors);
    }
    if (education.onlineCourses.length > 0) {
      $('#education').append(HTMLonlineClasses);
      for (var j = 0; j < education.onlineCourses.length; j++) {
        $('#education').append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
        $('.education-entry:last').append(formattedOnlineTitleSchool, formattedOnlineDates, formattedOnlineURL);
      }
    }
  }
};
education.display();

$('#main').append(internationalizeButton);
var inName = function() {
  var firstLast = bio.name.split(' ');
  var first = firstLast[0];
  var last = firstLast[1];
  return first.charAt(0).toUpperCase() + first.slice(1) + ' ' + last.toUpperCase();
};

$('#mapDiv').append(googleMap);