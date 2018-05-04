### Context

You are working for a company which aims to provide better communication between doctors, and the first product of this company involves sending medical reports between practitioners.

This company already has a base API for many apps, built with the FHIR standard (https://www.hl7.org/fhir).

The final goal of this challenge is to build a small webapp connected to this backend,  that will upload a document and give some reporting to the user.

There are 5 levels:
* Lvl 1: build a dropzone
* Lvl 2: send the file to a fake API
* Lvl 3: add some reporting information for the user
* Lvl 4: integrate with node-webkit
* Lvl 5: watch a directory on your machine. Any files dropped to this directory should be uploaded.

### General guidelines 

* You can use any framework you like.
* The app should look ok. It should be usable (have a decent UX and UI).

### Level 1

The goal is to create a small interface to drop a document.

* A drop zone should be present on the page
* When the user drop a document, the webpage should display the filename.
