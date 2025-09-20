import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSupermercado } from './forms-supermercado';

describe('FormsSupermercado', () => {
  let component: FormsSupermercado;
  let fixture: ComponentFixture<FormsSupermercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsSupermercado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsSupermercado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
