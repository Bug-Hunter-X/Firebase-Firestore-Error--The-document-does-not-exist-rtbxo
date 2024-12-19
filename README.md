# Firebase Firestore Error: The document does not exist
This repository contains a bug report and solution for a common error encountered when using Firebase Firestore: "Error: The document does not exist."

## Bug Description
The error "Error: The document does not exist" typically arises when attempting to perform an operation (e.g., update, delete) on a Firestore document that hasn't been created yet.  The code tries to write a document with ID 'BJ', but if that document doesn't exist already, the error will occur in this code.

## Solution
The provided solution demonstrates a way to avoid this error by checking the document's existence before attempting an operation or using a conditional write operation such as `set()` with the `merge` option.