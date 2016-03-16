# AngularJs_App_CINQ

Enclosed in this project, lies a small Web application that consumes a list of People provided by a
REST service.

This App can be reached using the following URL:

    http://localhost:8090/

This service can be reached using the following URL:

    http://localhost:8090/rest/people

For that, you will need to install Java JDK and Maven.

To Install JDK:

	download it here:

		http://www.oracle.com/technetwork/pt/java/javase/downloads/index.html

	After installed, you must configure the Java Enviroments Variables in order to do that follow this procedure:

		https://www.youtube.com/watch?v=yrRmLOcB9fg
	
To Install Maven:
	
	download the binary zip here:
	
		https://maven.apache.org/download.cgi

	To install it follow this procedure:
	
		https://www.youtube.com/watch?v=p6LAsta-iDw
		
After you sucessfully installed everything, just open a command prompt:

1. Navigate to project path

2. Type: 

	mvn clean package
		
3. Type:

    mvn spring-boot:run
	
To run Maven	
    
