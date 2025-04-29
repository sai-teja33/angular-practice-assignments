import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletroniccardComponent } from './eletroniccard.component';

describe('EletroniccardComponent', () => {
  let component: EletroniccardComponent;
  let fixture: ComponentFixture<EletroniccardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EletroniccardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EletroniccardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
