# Lifen Frontend Challenge

 Looking for a job? Check out our [open positions](https://www.welcometothejungle.co/companies/lifen/jobs).

## How-To

You will find the boilerplate code for a new React app inside the `/src` folder. The goal of this exercise is to build an app that allows doctors to upload medical documents to a [FHIR](https://fhir.org/) server.

1. Create a new public GitHub repository.
2. Solve each challenge in a separate commit.
3. Provide instructions to run your code.
4. Once you are done, send us the link to the repo!


Here are some guidelines:
- don't spend too much time on design/styling
- you can use external libs if/when necessary
- feel free to use Typescript if you wish


## Challenge 1: Drag & Drop

Create a small interface to drag&drop a PDF document.

- A drop zone should be present on the page
- Only pdf files are supported and they should not be heavier than 2Mo
- When the user drops a document, the filename should appear somewhere on the page


## Challenge 2: Upload the PDF

Upload each dropped document to the FHIR API.

When the user drops document, the document will be sent to the API Server. The FHIR resource corresponding to a file is a `Binary`.  

The base URL for the server's API is `http://hapi.fhir.org/baseDstu3/`.
This is a public test server, meaning that every resource is accessible at this URL (for instance: 
- Binary: `http://hapi.fhir.org/baseDstu3/Binary`
- Practitioner: `http://hapi.fhir.org/baseDstu3/Practitioner`.

Example to create a `Binary` on the server using the `fetch` Browser API:
```javascript
fetch('http://hapi.fhir.org/baseDstu3/Binary', { method: 'POST', body: myFile })
```


## Challenge 3: Show Total

When the upload is ready, we want to show some reporting information to the user. We want to display the total amount of `Binary` resources on the server, somewhere on the page.

After each upload, the total should be updated.

These resources should help you achieve the desired result:
- https://www.hl7.org/fhir/http.html
- https://hapi.fhir.org/resource?serverId=home_21&pretty=true&resource=Binary


## Challenge 4: Desktop App

We now have a working uploading system! But healthcare professionals are often very busy, and this process might be too time-consuming for them.

We want to be able to "watch" a folder on the user's computer, so that every file that gets added to this directory is uploaded to the server.
Normal webpages running inside a browser are not allowed to "watch" local directories, so we have to build a desktop app to access the user's system.

We can use a framework called [Electron](https://electronjs.org/) for that.

* Setup the framework
* Integrate your app with this framework


## Challenge 5: Watch a folder
Let's connect the final pieces together: watch a directory

* The desktop application should watch this directory when started: `~/FHIR`
* When a new file arrives in the directory, upload it as a FHIR `Binary`. It should display the same reporting information (the total amount of `Binary`) as if the user dropped the file.