import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { DataSubmitterNavigationComponent } from '../components/data-submitter-navigation.component';

@Component({
  selector: 'app-data-template-summary',
  standalone: true,
  imports: [CommonModule, RouterModule,DataSubmitterNavigationComponent],
  templateUrl: './data-template-summary.component.html',
})
export class DataTemplateSummaryComponent {
  summaryCards = [
    {
      number: '08',
      title: 'Submission Summary',
      description: 'templates awaiting data entries'
    },
    {
      number: '02',
      title: 'Acceptance Pending',
      description: 'submissions currently under acceptance'
    },
    {
      number: '50',
      title: 'Review Summary',
      description: 'templates awaiting and completed review process'
    },
    {
      number: '100',
      title: 'Accepted',
      description: 'successfully processed submissions'
    },
    {
      number: '01',
      title: 'Rejected',
      description: 'submissions that require corrections'
    }
  ];
}