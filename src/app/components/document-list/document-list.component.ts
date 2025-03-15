import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentService, Document } from '../../services/document.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  selectedDocument: Document | null = null;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    // Subscribe to document changes
    this.documentService.getDocuments().subscribe((docs) => {
      this.documents = docs;
    });
  }

  // Open modal with selected document
  openEditModal(document: Document) {
    this.selectedDocument = { ...document };
  }

  // Save the updated document
  saveEdit() {
    if (this.selectedDocument) {
      this.documentService.updateDocument(
        this.selectedDocument.id,
        this.selectedDocument.name,
        this.selectedDocument.description
      );
      alert('✅ Document updated successfully!');
      this.selectedDocument = null; // Close modal
    }
  }

  // Delete a document
  deleteDocument(id: number) {
    if (confirm('❌ Are you sure you want to delete this document?')) {
      this.documentService.deleteDocument(id);
    }
  }
  downloadDocument(doc: Document) {
    const link = document.createElement('a');
    link.href = doc.fileData;  // Assuming fileData holds the base64 encoded file
    link.download = doc.name;  // Set the file name
    link.click();  // Programmatically trigger the download
  }
}
