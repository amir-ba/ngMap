import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMapComponent } from './ng-map.component';

describe('NgMapComponent', () => {
  let component: NgMapComponent;
  let fixture: ComponentFixture<NgMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
