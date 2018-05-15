
### Level 2

The goal is to upload the dropped document to the FHIR API.
The base URL for the API server is https://fhirtest.uhn.ca/baseDstu3/.
It means that every FHIR resources is accessible at this URL (for instance: `https://fhirtest.uhn.ca/baseDstu3/Binary` for `Binary` or `https://fhirtest.uhn.ca/baseDstu3/Practitioner` for `Practitioner`).
You can use this server for this webapp (it is completely open)


* When the user drops document, the document will be sent to the API Server. The FHIR resource corresponding to a file is a `Binary`.  

Example to upload a document with `fetch`: `fetch('https://fhirtest.uhn.ca/baseDstu3/Binary', { method: 'POST', body: myFile })`

When you are done -> [Next Level](https://github.com/honestica/frontend-jobs/tree/master/lvl3)
