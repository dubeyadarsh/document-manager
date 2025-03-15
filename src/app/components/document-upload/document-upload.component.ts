import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../../services/document.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
})
export class DocumentUploadComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  fileError = false;

  constructor(private fb: FormBuilder, private documentService: DocumentService) {
    this.uploadForm = this.fb.group({
      docName: ['', Validators.required],
      docDescription: [''],
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      if (!environment.allowedDocumentTypes.includes(this.selectedFile.type)) {
        this.fileError = true;
        this.selectedFile = null;
      } else {
        this.fileError = false;
      }
    }
  }

  onUpload() {
    if (!this.selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      const fileData = reader.result as string;
      this.documentService.addDocument(
        this.uploadForm.value.docName,
        this.uploadForm.value.docDescription,
        fileData
      );

      alert('✅ Document uploaded successfully!');
      this.uploadForm.reset();
      this.selectedFile = null;
    };
  }
}
