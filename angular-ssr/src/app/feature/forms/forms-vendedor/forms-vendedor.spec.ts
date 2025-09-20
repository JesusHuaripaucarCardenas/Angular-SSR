import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsVendedor } from './forms-vendedor';

describe('FormsVendedor', () => {
  let component: FormsVendedor;
  let fixture: ComponentFixture<FormsVendedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsVendedor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsVendedor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
