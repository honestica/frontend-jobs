### Level 5

Let's connect the final pieces to finish the app: watch a directory

* The desktop application should watch this directory when started: `~/FHIR`
* When a new file arrives in the directory, upload it as a Fhir `Binary`. It should have the same visual effect as if the user dropped the file in the application directly. It should also display the same reporting information (the total of `Binary`) as if the user dropped the file.
* Only pdf files are supported and they should not have a size more than 2mo.

### Bonus
* Surprise us! Add a feature that you think would work well here.