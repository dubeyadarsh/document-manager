import { Routes } from '@angular/router';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { DocumentListComponent } from './components/document-list/document-list.component';

export const routes: Routes = [
    { path: 'upload', component: DocumentUploadComponent },
    { path: 'documents', component: DocumentListComponent },
    { path: '**', redirectTo: 'upload' } // Redirect unknown routes to /upload
  ];
