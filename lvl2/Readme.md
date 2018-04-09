
### Level 2

The goal is to upload the dropped document to the FHIR API.
The backend team built the API server at https://fhirtest.uhn.ca/baseDstu3/ (documentation at https://fhirtest.uhn.ca). You can use this server

* When the user drops document, the document will be sent to the API Server. The FHIR resource corresponding to a file is a `Binary`.  

Example to upload a document with `fetch`: `fetch('https://fhirtest.uhn.ca/baseDstu3/Binary', { method: 'POST', body: myFile })`

When you are done -> [Next Level](https://github.com/honestica/frontend-jobs/tree/master/lvl3)
