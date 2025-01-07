import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateEcartComponent } from './generate-ecart.component';

describe('GenerateEcartComponent', () => {
  let component: GenerateEcartComponent;
  let fixture: ComponentFixture<GenerateEcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateEcartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateEcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
