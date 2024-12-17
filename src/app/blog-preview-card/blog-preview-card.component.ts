import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-preview-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-preview-card.component.html',
  styleUrl: './blog-preview-card.component.css',
})
export class BlogPreviewCardComponent {
  publishInfo = 'Published 21 Dec 2023';
  title = 'HTML & CSS foundations';
  briefIntro = `These languages are the backbone of every website, 
    defining structure, content, and presentation.`;
  author = `Greg Hooper`;
}
