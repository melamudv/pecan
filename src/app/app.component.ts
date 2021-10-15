import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ITree} from '../shared/interface';
import {DataService} from '../core/data.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService, private elementRef: ElementRef) {}
  subscription: Subscription;
  tree: ITree[]= [];
  ngOnInit() {
    this.subscription = this.dataService.getTree()
        .subscribe((tree: ITree[]) => {
          this.tree = tree
          this.recursive(this.tree);
        });
  }
  recursive(tree){
    tree.forEach(node =>{
      let treeRecursive = this.elementRef.nativeElement.querySelector('.tree-recursive');
      treeRecursive.insertAdjacentHTML('beforeend', `<div>${node.title}</div>`);
      if(!node.level){
        return node;
      }
      this.recursive(node.level)
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
