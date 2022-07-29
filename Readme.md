# Lifen Frontend Challenge

 Looking for a job? Check out our [open positions](https://www.welcometothejungle.co/companies/lifen/jobs).

## How-To

You will find the boilerplate code for a new React app inside the `/src` folder. The goal of this exercise is to build an app that allows doctors to upload medical documents to a [FHIR](https://fhir.org/) server, and send them to a medical professional.

1. Clone this repository.
2. **Solve each challenge in a separate commit**.
3. Once you are done, send us the link to the repo!


Here are some guidelines:
- you can use external libs if/when necessary
- feel free to make changes to the existing code if you need


## Setup

- Make sure you have Node v.14.16.0 or higher and Yarn installed on your machine.
- Install dependencies with `yarn install`.
- Start the app with `yarn start`.

## Challenge 1: Drag & Drop

Let's start coding! First, we will allow the user to drop a document inside a drop zone.

- A drag & drop zone should already be displayed on the page.
- When the user drops a document, show the filename on the page, below "Document list".
- Only pdf files are supported and they should not be heavier than 2Mo

## Challenge 2: Upload the PDF

This is a great start. But if the user restarts the app, all documents will be lost... We want to upload each dropped document to a server in order to avoid data loss.

An API endpoint is available to help you with that. You should include the file in the body of your request, in base64 format.
```
POST http://hapi.fhir.org/baseDstu3/Binary
```

Warning: This is a public test server. Don't upload anything confidential!


- When the user drops a new document, you should upload it as a `Binary` resource to the FHIR test server.
- When you visit [http://hapi.fhir.org/baseDstu3/Binary?_format=json](http://hapi.fhir.org/baseDstu3/Binary), you should see your new file as the first `entry` item. This is the actual file, live on the server! You can decode its `content` property [here](https://base64.guru/converter/decode/pdf) to make sure everything is working properly.


## Challenge 3: Show Total

When the upload is ready, we want to show some reporting information to the user. We want to display the total amount of `Binary` resources on the server.

This query should get you the required data:
```
GET http://hapi.fhir.org/baseDstu3/Binary/_history
```
Check [this page](https://www.hl7.org/fhir/search.html#summary) for a list of allowed query params.

- The current total is always at 0. Display the actual amount of docs on the server when the app starts.
- Make sure the total is updated every time a new doc is successfully uploaded.
- (Optional) Because we are fetching a lot of Binary data, this query is taking a long time to resolve. See what you could do to optimize it.


## Challenge 4: Send the document

Now that we have a working uploading system, we are ready to send the documents to healthcare
professionals.

Every time a new document is uploaded, we want the user to select the document's recipient from a list. For the purpose of this exercise, we are not going to actually send the documents, but we want to display the recipient's name on the page.

This endpoint allows you to search for all medical professionals on the server:
```
GET http://hapi.fhir.org/baseDstu3/Practitioner
```
See [endpoint documentation](https://hapi.fhir.org/resource?serverId=home_21&pretty=true&_summary=&resource=Practitioner) for more info. 

- Build a text input to allow the user to search for doctors by name.
- The expected format to display a doctor's name is `prefix + first name + last name` ("Dr John Gray")
- When the user has typed 3+ characters, search results should be displayed below the input, and refresh automatically when the input changes.
- For every search result, we should see the doctor's name in the expected format, and their postal code and city if it is available.
- The user can select a doctor from the list, and the selected doctor's name should appear next to the filename on the document list.
- We can only send documents to France. Professionals from other countries should not be displayed in search results.
