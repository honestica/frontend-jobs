# Lifen Frontend Challenge

 Looking for a job? Check out our [open positions](https://www.welcometothejungle.co/companies/lifen/jobs).

## How-To

You will find the boilerplate code for a new [Electron](https://electronjs.org/) + React app inside the `/src` folder. The goal of this exercise is to build a desktop app that allows doctors to upload medical documents to a [FHIR](https://fhir.org/) server.

1. Clone this repository.
2. Solve each challenge in a separate commit.
3. Once you are done, send us the link to the repo!


Here are some guidelines:
- you can use external libs if/when necessary
- feel free to make changes to the existing code if you need


## Setup

- Make sure you have Node v.14.16.0 or higher and Yarn installed on your machine.
- Run `yarn install`. This might take a little longer than what you are used to, since the first install will download all the packages needed for the Electron framework to work properly.
- Start the desktop app with `yarn start`. We have loaded the developer tools for you. The app will automatically reload when you make changes to the code.

## Challenge 1: Drag & Drop

Let's start coding! First, we will allow the user to drop a document inside the drop zone.

- A drop zone should be present on the page
- Only pdf files are supported and they should not be heavier than 2Mo
- When the user drops a document, the filename should be added on the page, below "Document list".


## Challenge 2: Upload the PDF

This is a great start. But if the user restarts the app, all documents will be lost... We now want to upload each dropped document to a server.

An API endpoint is available to help you with that. You can include the file in the body of your request.

```
POST http://hapi.fhir.org/baseDstu3/Binary
```

Warning: This is a public test server. Don't upload anything confidential!


- When the user drops a new document, you should upload it as a `Binary` resource to the FHIR test server.


## Challenge 3: Show Total

When the upload is ready, we want to show some reporting information to the user. We want to display the total amount of `Binary` resources on the server.

These API resources should help you achieve the desired result:
https://www.hl7.org/fhir/http.html,
https://hapi.fhir.org/resource?serverId=home_21&pretty=true&resource=Binary

- The current total is always at 0. Display the actual amount of docs on the server when the app starts.
- Make sure the total is updated every time a new doc is successfully uploaded.


## Challenge 4: Virtual Printer

We now have a working uploading system! But healthcare professionals are often very busy, and this process might be too time-consuming for them.

To improve on this experience, we want to be able to "watch" a folder on the user's computer, so that every file that gets added to this directory is uploaded to the server.

Web pages running inside a browser are not allowed to "watch" local directories. This is why we had to build a desktop app for this project.

Now, let's connect the final pieces together: watch a directory

* The desktop application should watch this directory on your computer when started: `~/FHIR`
* When a new file arrives in the directory, upload it as a FHIR `Binary`. It should display the same reporting information (the total amount of `Binary`) as if the user dropped the file.