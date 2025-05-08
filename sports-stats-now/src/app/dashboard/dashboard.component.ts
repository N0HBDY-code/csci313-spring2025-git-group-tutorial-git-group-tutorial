import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { User } from 'firebase/auth';
import { Subscription, Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  user: User | null = null;
  private userSub!: Subscription;
  games$: Observable<any[]>;
  today: Date = new Date();

  constructor(private authService: AuthService, private firestore: Firestore) {
    const gamesCollection = collection(this.firestore, 'games');
    this.games$ = collectionData(gamesCollection, { idField: 'id' });
  }

  ngOnInit(): void {
    this.userSub = this.authService.currentUser.subscribe((user: User | null) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout().then(() => {
      window.location.href = '/login';
    });
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
