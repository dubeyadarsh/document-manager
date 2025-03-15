import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Document {
  id: number;
  name: string;
  description: string;
  fileData: string; 
}

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: Document[] = [];
  private documentsSubject = new BehaviorSubject<Document[]>([]);

  constructor() {
    this.loadDocumentsFromStorage();
  }

  getDocuments() {
    return this.documentsSubject.asObservable();
  }

  private loadDocumentsFromStorage() {
    const storedDocs = localStorage.getItem('documents');
    this.documents = storedDocs ? JSON.parse(storedDocs) : [];
    this.documentsSubject.next(this.documents);
  }

  private saveDocumentsToStorage() {
    localStorage.setItem('documents', JSON.stringify(this.documents));
    this.documentsSubject.next(this.documents);
  }

  addDocument(name: string, description: string, fileData: string) {
    const newDoc: Document = {
      id: new Date().getTime(), // Unique ID based on timestamp
      name,
      description,
      fileData,
    };

    this.documents.push(newDoc);
    this.saveDocumentsToStorage();
  }

  updateDocument(id: number, name: string, description: string) {
    const index = this.documents.findIndex((doc) => doc.id === id);
    if (index !== -1) {
      this.documents[index].name = name;
      this.documents[index].description = description;
      this.saveDocumentsToStorage();
    }
  }

  deleteDocument(id: number) {
    this.documents = this.documents.filter((doc) => doc.id !== id);
    this.saveDocumentsToStorage();
  }
}
