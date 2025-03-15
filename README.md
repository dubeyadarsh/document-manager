# Document Manager Application

## Description
The Document Manager Application allows users to upload, view, edit, and delete documents (such as PDFs and images) along with their metadata (name and description). All document data, including files and metadata, are saved to the browser's local storage for persistent storage.

This application is built using **Angular 18.2** for the frontend and **Node.js 20.18** for backend functionalities (if applicable).

## Features
1. **Upload Document:** 
   - Users can upload a document (e.g., PDF, image) along with a document name and description via a form.
   
2. **View Documents List:** 
   - Users can view all uploaded documents in a list format.
   
3. **Edit Document Metadata:**
   - Users can edit the name and description of any uploaded document.
   
4. **Delete Document:**
   - Users can delete documents from the list.
   
5. **Local Storage:**
   - All document metadata and files are saved to the browser's local storage.
   
6. **Deployment:** 
   - The application is deployed and accessible via Netlify.
   - https://docs-management.netlify.app/upload

## Installation

### Prerequisites
- Node.js (v20.18)
- Angular CLI (18.2)
- Git

### Steps to Set Up Locally
1. **Clone the repository:**

   ```bash
   git clone https://github.com/dubeyadarsh/document-manager.git
   cd document-manager



2. **Install the Dependencies
    ```bash
	npm install

3. **Serve the application
	```bash
	ng serve
	
The application will be available at http://localhost:4200/.
