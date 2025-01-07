import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClientComponent } from './app-client.component';

describe('AppClientComponent', () => {
  let component: AppClientComponent;
  let fixture: ComponentFixture<AppClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
