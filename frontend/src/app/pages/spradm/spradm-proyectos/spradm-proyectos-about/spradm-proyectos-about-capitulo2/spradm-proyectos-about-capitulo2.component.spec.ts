import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo2Component } from './spradm-proyectos-about-capitulo2.component';

describe('SpradmProyectosAboutCapitulo2Component', () => {
  let component: SpradmProyectosAboutCapitulo2Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
