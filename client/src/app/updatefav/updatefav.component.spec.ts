import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefavComponent } from './updatefav.component';

describe('UpdatefavComponent', () => {
  let component: UpdatefavComponent;
  let fixture: ComponentFixture<UpdatefavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
