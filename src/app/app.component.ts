import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITree} from '../shared/interface';
import {DataService} from '../core/data.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService) {}
  subscription: Subscription;
  tree: ITree[]= [];
  ngOnInit() {
    this.subscription = this.dataService.getTree()
        .subscribe((tree: ITree[]) => {this.tree = tree});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
