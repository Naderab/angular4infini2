import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresemploisComponent } from './offresemplois.component';

describe('OffresemploisComponent', () => {
  let component: OffresemploisComponent;
  let fixture: ComponentFixture<OffresemploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresemploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresemploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
