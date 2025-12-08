import { Component, EventEmitter, Output, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface FileDetails {
  name: string;
  size: number;
  uploadDate: Date;
  recordCount: number;
}

@Component({
  selector: "app-file-submission-confirmation-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./file-submission-confirmation-modal.component.html",
})
export class FileSubmissionConfirmationModalComponent {
  @Input() fileDetails!: FileDetails;
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  formatFileSize(bytes: number): string {
    return (bytes / 1024 / 1024).toFixed(1) + " MB";
  }

  formatUploadDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options);
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.cancel.emit();
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }
}
