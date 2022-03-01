import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Random idea",
      "Another one!",
      "And Another one!"
    ]),

    new Column('Research',[
      "Random research",
      "Random research",
      "Anonther one"
    ]),

    new Column('Todo',[
      'Get to work', 
      'Pick up groceries', 
      'Go home', 
      'Fall asleep'
    ]),

    new Column('Done',[
      'Get up', 
      'Brush teeth', 
      'Take a shower', 
      'Check e-mail', 
      'Walk dog'
    ])


  ]);

  ngOnInit(): void {
  }

  //Old arrays before the ones above
  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) { //moves item in array if previous container is equal to the current container it's being dragged into
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
