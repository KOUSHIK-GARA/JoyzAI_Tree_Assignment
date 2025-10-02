import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {

  @Input() data: {[key:string]:string[]} = {};
  @Input() rootNode:string = '';
  isCollapsed : boolean = true;
  upArrow : string = '&#9650;';
  downArrow: string = '&#9660;';

  getChildren(key:string):string[] {
    return this.data[key] || [];
  }

  toggle(){
    if(this.getChildren(this.rootNode).length > 0){
      this.isCollapsed = !this.isCollapsed;
    }
  }

  hasChildren() : boolean {
    return this.getChildren(this.rootNode).length > 0;
  }


  

}
