import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';
import{Store} from '@ngrx/store'
import { customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';


@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit{

 value:any;
 channelName:any

  constructor(private store: Store<{counter:CounterState}> ){}


  ngOnInit(): void {
 this.store.select(getChannelName).subscribe((channelName)=>{
  this.channelName = channelName
 })
  }
  onAdd(){
    this.store.dispatch(customIncrement({count:this.value}))
  }

}
