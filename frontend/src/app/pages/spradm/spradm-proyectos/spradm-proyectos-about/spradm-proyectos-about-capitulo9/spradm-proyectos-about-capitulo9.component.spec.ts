import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo9Component } from './spradm-proyectos-about-capitulo9.component';

describe('SpradmProyectosAboutCapitulo9Component', () => {
  let component: SpradmProyectosAboutCapitulo9Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
