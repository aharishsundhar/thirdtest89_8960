import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedgetallComponent } from './usedgetall.component';

describe('UsedgetallComponent', () => {
  let component: UsedgetallComponent;
  let fixture: ComponentFixture<UsedgetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedgetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedgetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});