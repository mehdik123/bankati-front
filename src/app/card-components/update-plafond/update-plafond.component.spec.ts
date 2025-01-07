import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlafondComponent } from './update-plafond.component';

describe('UpdatePlafondComponent', () => {
  let component: UpdatePlafondComponent;
  let fixture: ComponentFixture<UpdatePlafondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePlafondComponent]
    });
    fixture = TestBed.createComponent(UpdatePlafondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
