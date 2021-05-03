import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.css']
})
export class FieldSearchComponent implements OnInit {

  private _id: number;
  @Output() messageWithId = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public captureIdInput(): void {
    this.messageWithId.emit(this._id);
  }





}
