import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSupermercado } from './perfil-supermercado';

describe('PerfilSupermercado', () => {
  let component: PerfilSupermercado;
  let fixture: ComponentFixture<PerfilSupermercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilSupermercado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSupermercado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
