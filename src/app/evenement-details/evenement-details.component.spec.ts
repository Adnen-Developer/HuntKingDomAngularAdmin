import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDetailsComponent } from './evenement-details.component';

describe('AdminViewDetailsComponent', () => {
  let component: AdminViewDetailsComponent;
  let fixture: ComponentFixture<AdminViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
