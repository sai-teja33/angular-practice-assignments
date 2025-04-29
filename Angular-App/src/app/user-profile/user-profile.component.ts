import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'Rakesh',
    email: 'rakesh@gmail.com',
    profilePicture: 'https://cdn.pixabay.com/photo/2024/03/31/05/00/ai-generated-8665996_1280.jpg'
  };

  saveProfile() {
    alert('Profile saved!');
  }
}
