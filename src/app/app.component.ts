import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title :string = "JoyzAI Assignment";
  inputTree = {
    a:["b","c"],
    b:["d","e"],
    c : ["f","g"],
    e : ["h","i"],
    f : ["j", "k"]
  }
  root:string = '';

  ngOnInit(): void {
    this.root = this.findRootNode(this.inputTree);
  }

  findRootNode(tree : {[key:string]:string[]}){
    const allNodes = new Set(Object.keys(tree));
    const childNodes = new Set(Object.values(tree).flat());
    for(let node of allNodes){
      if(!childNodes.has(node)) return node;
    }
    return Object.keys(tree)[0];
  }

}
