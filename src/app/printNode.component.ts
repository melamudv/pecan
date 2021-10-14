import {Component, Input, OnInit} from '@angular/core';
import {ITree} from '../shared/interface';

@Component({
    selector: 'app-print-node',
    templateUrl: './printNode.component.html'
})
export class PrintNodeComponent {
    @Input() data: ITree[];
    @Input() icon: string;
}
