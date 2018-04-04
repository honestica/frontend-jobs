### Level 4

Let's connect the final pieces to finish the app: watch a directory

* The desktop application should watch this directory when started: `~/FHIR`
* When a new file arrives in the directory, upload it as a Fhir `Binary`. It should have the same visual effect as if the user selected the file in the application directly.
* Only pdf files are supported and they should not have a size more than 2mo.

