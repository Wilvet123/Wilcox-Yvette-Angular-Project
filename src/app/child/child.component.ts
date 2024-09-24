import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildService } from '../services/child.service';
import { Subscription } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  name!: string
  subscription: Subscription //needed to initialize observable
  constructor(private childService: ChildService){
  this.subscription = childService.name$.subscribe((response) =>{
    this.name = response
  })
  }
@Input() childInput: string | undefined
@Output() nameEmitter = new EventEmitter<string>()

displayName(){
  this.nameEmitter.emit('Yvette Wilcox')
}
}
