import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillManagerComponent } from './bill-manager.component';

describe('BillManagerComponent', () => {
  let component: BillManagerComponent;
  let fixture: ComponentFixture<BillManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
