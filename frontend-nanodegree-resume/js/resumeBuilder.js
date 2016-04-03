/**
* my bio object
*/
var bio = {
	"name": "Johannes Birk",
	"role": "Web Developer",
	"pictureURL": "images/Profilbild.jpg",
	"welcomemessage": "Welcome to my resume!",
	"contacts": {
		"location": "Bamberg",
		"Email": "Johannes.Birk11@web.de",
		"GitHub": "Johannes1803",
		"Udacity": "johannes_253690"
	},
	"skills":["Python", "JavaScript", "CSS", "GitHub", "Grunt"],
	};




/**
* Add my role to index.html
* All functions encapsulated in respective object
*/
bio.display_role = function() {
	var roleformatted = HTMLheaderRole.replace("%data%", bio.role);
	//substitute the string %data% with data from my bio,
	$("#header").prepend(roleformatted);
	// use selector to prepend to id=#header of index.html the formatted role
	// this is a simple JSON Dom manipulation method
};


/**
* Add my formatted name to index.html
*/
bio.display_name = function() {
	var nameformatted = HTMLheaderName.replace("%data%", bio.name);
	//substitute the string %data% with data from my bio
	$("#header").prepend(nameformatted);
	// use selector to append to id = #header of index.html the formatted name
};


/**
* Add my formatted contacts to index.html, to its header and to its footer
*/
bio.display_contact = function() {
	var emailformatted = HTMLemail.replace("%data%", bio.contacts.Email);
	$("#topContacts").append(emailformatted);
	$("#footerContacts").append(emailformatted);
	var githubformatted = HTMLgithub.replace("%data%", bio.contacts.GitHub);
	$("#topContacts").append(githubformatted);
	$("#footerContacts").append(githubformatted);
	var locationformatted = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(locationformatted);
	$("#footerContacts").append(locationformatted);
	var udacityformatted = HTMLblog.replace("%data%", bio.contacts.Udacity);
	$("#topContacts").append(udacityformatted);
	$("#footerContacts").append(udacityformatted);


};

/**
* Add my formatted picture to index.html
*/
bio.display_picture = function() {
	var pictureformatted = HTMLbioPic.replace("%data%", bio.pictureURL);
	$("#header").append(pictureformatted);
};


/**
* Add my formatted welcome-message to index.html
*/
bio.display_message = function() {
	var messageformatted = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
	$("#header").append(messageformatted);
};

/**
* Add my formatted skills to index.html
*/
bio.displayskills = function() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var indexCount = 0; indexCount< bio.skills.length; indexCount++) {
			var currentskill = bio.skills[indexCount];
			var skillformatted = HTMLskills.replace("%data%", currentskill);
			$("#skills").append(skillformatted);
		}
	}

};
/**
* major display-function for bio
*/
bio.display = function() {
	bio.display_role();
	bio.display_name();
	bio.display_contact();
	bio.display_picture();
	bio.display_message();
	bio.displayskills();
};

bio.display();
/**
* My projects object
*/
var projects = {
	"projects": [
	{
		"title": "Let anyone modify your page",
		"dates": "August-Oktober 2015",
		"description": "Store users pictures and comments on the server side",
		 "images": ["http://i.imgur.com/kLkfQzJ.png", "http://i.imgur.com/zYWzQfe.png"]
	},
	{
		"title": "Create a Movie Website",
		"dates": "August 2015",
		"description": "Created a movie website with images and trailers",
		"images": ["http://i.imgur.com/kDy4c5s.png", "http://i.imgur.com/xGXks6R.png"]
	}
	]
};
/**
* major display-function for projects
*/
projects.display = function() {
	for (var round= 0; round < projects.projects.length; round++) {
	// loop over the array where each element is itself a "project" object
		$("#projects").append(HTMLprojectStart);
		// Initialize the div for a new project
		var current_project = projects.projects[round]; //select current project object
		var projecttitleformatted = HTMLprojectTitle.replace("%data%",current_project.title);
		// Substitute using .replace method
		var projectdateformatted = HTMLprojectDates.replace("%data%", current_project.dates);
		var projectdescriptionformatted = HTMLprojectDescription.replace("%data%", current_project.description);
		var project_final = projecttitleformatted + projectdateformatted + projectdescriptionformatted;
		// concatenate all the formatted variables
		$(".project-entry:last").append(project_final);
		// append the variable project_final to the most recent entity of the class "project-entry".
		// This class "project-entry" is created when HTMLprojectStart is appended to index.html
		for (var index = 0; index < current_project.images.length; index++){// for every project entry: loop over list of image urls
			var image_formatted = HTMLprojectImage.replace("%data%", current_project.images[index]);
			$(".project-entry:last").append(image_formatted);
			// Add the images to every project-entry
		}
	}
};

projects.display();

/**
* My education object
*/
var education = {
	"schools": [
		{	"name": "Otto-Friedrich-University",
			"location": "Bamberg",
			"degree": "Bachelor of Science",
			"majors": ["Psychology"],
			"dates": "September 2013 - today",
			"url": "https://www.uni-bamberg.de"
		},
		{
			"name": "Bodenseegynasium",
			"location": "Lindau",
			"degree": "A-Levels",
			"majors": ["Italian",],
			"dates": "until 2012",
			"url": "http://www.bodensee-gymnasium.de/"
		},
	],
	"online-courses": [
	{
		"title": "Introduction to Programming Nanodegree",
		"school": "Udacity",
		"dates": "Juli - November 2015",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	},
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "March 2016 - today",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}


	]
};
/**
* Add my schools to index.html
*/
education.display_schools = function() {
	for (var counter = 0; counter < education.schools.length; counter++) {
		current_school = education.schools[counter];
		$("#education").append(HTMLschoolStart);
		var name_nice = HTMLschoolName.replace("%data%", current_school.name);
		var location_nice = HTMLschoolLocation.replace("%data%", current_school.location);
		var degree_nice = HTMLschoolDegree.replace("%data%", current_school.degree);
		var majors_nice = HTMLschoolMajor.replace("%data%", current_school.majors);
		var dates_nice = HTMLschoolDates.replace("%data%", current_school.dates);
		var url_nice = HTMLonlineURL.replace("%data%", current_school.url);
		var school_final = name_nice + degree_nice  + majors_nice + location_nice + dates_nice + url_nice;
		$(".education-entry:last").append(school_final);
	}
};


/**
* Add my online-courses to index.html
*/
education.display_onlinecourses = function() {
	$("#education").append(HTMLonlineClasses);
	for (var COUNT = 0; COUNT < education["online-courses"].length; COUNT++) {
		current_course = education["online-courses"][COUNT];
		$("#education").append(HTMLschoolStart);
		var title_nice = HTMLonlineTitle.replace("%data%", current_course.title);
		var school_nice = HTMLonlineSchool.replace("%data%", current_course.school);
		var dates_formatted = HTMLonlineDates.replace("%data%", current_course.dates);
		var url_formatted = HTMLonlineURL.replace("%data%", current_course.url);
		var course_final = title_nice + school_nice + dates_formatted + url_formatted;
		$(".education-entry:last").append(course_final);
	}
};
/**
* major display-function for education
*/
education.display = function() {
	education.display_schools();
	education.display_onlinecourses();
};

education.display();
/**
* My work object
*/
var work = {
	"jobs": [
	{
		"employer":"former school" ,
		"title":"coaching English and Mathematics",
		"location": "Lindau",
		"dates":"2011-2012",
		"description": "Teaching younger students English and Mathematics"
}
	]

};
/**
* major display-function for work
*/
work.display = function() {
	for (var run = 0; run < work.jobs.length; run++) {
		var current_job = work.jobs[run];
		$("#workExperience").append(HTMLworkStart);
		var employerformatted = HTMLworkEmployer.replace("%data%", current_job.employer);
		var titleformatted = HTMLworkTitle.replace("%data%", current_job.title);
		var locationformatted = HTMLworkLocation.replace("%data%", current_job.location);
		var datesformatted = HTMLworkDates.replace("%data%", current_job.dates);
		var descriptionformatted = HTMLworkDescription.replace("%data%", current_job.description);
		var jobfinal = employerformatted + titleformatted + locationformatted + datesformatted +descriptionformatted;
		$(".work-entry:last").append(jobfinal);
	}

};

work.display();

/**
* Enable Displaying my locations on the map
* Append to index.html, id= mapDiv the variable googleMap
*/
$("#mapDiv").append(googleMap);
