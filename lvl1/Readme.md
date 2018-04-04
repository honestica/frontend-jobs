### Context

You are working for a company which aims to provide better communications between doctors, and the first product of this company involves sending medical report between practitioner.

This company wants to build foundation for many apps and easy interoperability, so the backend team built the API with a standard called FHIR (https://www.hl7.org/fhir).

The goal of this challenge is to build a small webapps with this standard that will upload a document and give some reporting to the user.

### General guidelines 

* You can use any framework you like.
* The app should look ok. It should be usable (have a decent UX and UI).

### Level 1

* The backend team built the API server on https://fhirtest.uhn.ca/baseDstu3/ (documentation on https://fhirtest.uhn.ca)
* The goal is to create a small interface to upload a document.
* When the user picks or selects a document, the document will be sent to the API Server. The FHIR resource corresponding to a file is a `Binary`.  

Example to upload a document: `fetch('https://fhirtest.uhn.ca/baseDstu3/Binary', { method: 'POST', body: 'test' })

