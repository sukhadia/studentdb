Introduction:
-------------
Student DB is a basic student information management web application based on 
the Node Cellar application by C. Coenraets. 

IMPORTANT: Please note, the rest of the instructions are specific to my environment. But if you wanted to try out this application for your own needs,
your steps should be similar.

Start of CLTCUSA-specific documentation:
----------------------------------------
A copy of this file is also on the desktop under the name STUDENT_DB_NOTES.txt.

How to start:
-------------
1.   Open a Cygwin window from desktop.
2. 	Type following commands(copy-n-paste from here): 
		cd /cygdrive/c/software/studentdb
		mongod --dbpath data
	
3. Open another Cygwin window from desktop
4. Type following commands(copy-n-paste from here):
		cd /cygdrive/c/software/studentdb
		node server.js

How to access:
-------------
To access it on this computer type
http://cltcusa/ (or http://localhost/) in a browser (preferably Google Chrome)
It can also be accessed on other computers or mobile devices on the same WIFI network by
typing http://cltcusa/ in the browser.

How to install Student DB (on a different computer):
----------------------------------------------------
Easy way:
---------
Zip C:\software on this computer
Unzip to C: on the new computer
Set Path (User) environment variable to this "%Path%;C:\software\nodejs;C:\software\mongodb\bin;C:\software\cygwin;C:\software\cygwin\bin"

Bit trickier way :-) :
----------------------
Install Node JS
Install Mongo DB
Install studentdb folder (at time of this writing under c:\software)

About Student DB Technology:
----------------------------
The Student DB application was developed using the following frameworks:
JQuery, Backbone JS, Twitter Bootstrap
