import { Component, OnInit, ChangeDetectionStrategy, ViewContainerRef, NgZone, AfterViewChecked } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp5',
  templateUrl: './cmp5.component.html',
  styleUrls: ['./cmp5.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp5Component implements OnInit, AfterViewChecked {

  constructor(private ch: CheckEventService, private el: ViewContainerRef, private zone: NgZone) {}

  ngAfterViewChecked(): void {
    console.log('TEST');
    // this.msg = '변화감지!';
    this.ch.checkEvent(this.el, this.zone , '');
  }

  ngOnInit() {
  }

}
