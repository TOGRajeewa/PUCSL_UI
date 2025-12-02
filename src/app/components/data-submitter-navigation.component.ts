import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-submitter-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav
      class="fixed left-0 top-44 bg-gradient-primary rounded-r-3xl shadow-lg transition-all duration-300 ease-in-out z-50 group"
      [class.w-[66px]]="!isExpanded"
      [class.w-[266px]]="isExpanded"
      (mouseenter)="isExpanded = true"
      (mouseleave)="isExpanded = false"
    >
      <div class="flex flex-col h-full px-3 py-10 gap-16">
        <!-- Logo Section -->
        <div 
          class="flex items-center justify-center transition-all duration-300"
          [class.opacity-0]="!isExpanded"
          [class.opacity-100]="isExpanded"
          [class.h-0]="!isExpanded"
          [class.h-auto]="isExpanded"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/14bf964aafe0f49f513d4f2c94ee1be878ec6e11?width=470"
            alt="PUCSL Logo"
            class="w-[235px] h-[106px] rounded-xl object-contain"
          />
        </div>

        <!-- Navigation Items -->
        <div class="flex flex-col gap-8">
          <a
            *ngFor="let nav of navItems; let i = index"
            [routerLink]="nav.route"
            routerLinkActive="bg-teal-500"
            [routerLinkActiveOptions]="{ exact: false }"
            class="flex items-center gap-2 p-2.5 rounded-lg hover:bg-teal-500/80 transition-all duration-200 cursor-pointer group/item"
          >
            <img [src]="nav.icon" alt="" class="w-6 h-6 flex-shrink-0" />
            <span
              class="text-[#E2E2E2] text-base font-medium font-['Poppins'] capitalize whitespace-nowrap overflow-hidden transition-all duration-300"
              [class.opacity-0]="!isExpanded"
              [class.opacity-100]="isExpanded"
              [class.w-0]="!isExpanded"
              [class.w-auto]="isExpanded"
            >
              {{ nav.label }}
            </span>
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class DataSubmitterNavigationComponent {
  @Input() activeRoute?: string;
  
  isExpanded = false;

  navItems = [
    {
      label: 'Dashboard',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/cc98f667230941ae3075229caf079ef6c36fdd45?width=48',
      route: '/data-submitter-dashboard'
    },
    {
      label: 'Data Templates',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/452234bb60d99b356ba6311e6e799e095314ca87?width=48',
      route: '/data-template-summary'
    },
    {
      label: 'Data Files',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c7415cd43a008aac4e7ab1eb8c869bff352ff0a9?width=48',
      route: '/data-submitter-files'
    },
    {
      label: 'Data Table Summary',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c8ba69aa9ba83c652dd93af762ca702c4b345901?width=48',
      route: '/data-submitter-table-summary'
    },
    {
      label: 'User Manual',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c1953e0eb7935f9d21a83a40acc77aef50f75e90?width=48',
      route: '/user-manual'
    }
  ];
}