import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcreateComponent } from './usedcreate.component';

describe('UsedcreateComponent', () => {
  let component: UsedcreateComponent;
  let fixture: ComponentFixture<UsedcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});