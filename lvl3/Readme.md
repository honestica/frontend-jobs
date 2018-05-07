### Level 3

When the upload is ready, we want to show some reporting information for the user.
We want to see if the server is not too full, so we want to display the total number of `Binary` on the server.

* After every upload, find the total number of `Binary` in the API (look https://www.hl7.org/fhir/http.html and https://fhirtest.uhn.ca/resource?serverId=home_21&pretty=true&resource=Binary)
* You should properly chain the `upload` call and the `findTotal` call, they should happen successively. 
* Display the information on the webpage nicely

When you are done -> [Next Level](https://github.com/honestica/frontend-jobs/tree/master/lvl4)
