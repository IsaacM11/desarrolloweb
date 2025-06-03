import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
   skills = [
    { name: 'Angular', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 75 }
  ];

}
