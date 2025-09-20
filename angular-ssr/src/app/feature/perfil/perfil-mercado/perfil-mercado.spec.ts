import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMercado } from './perfil-mercado';

describe('PerfilMercado', () => {
  let component: PerfilMercado;
  let fixture: ComponentFixture<PerfilMercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilMercado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilMercado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
