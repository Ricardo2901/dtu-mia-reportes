import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo6Component } from './spradm-proyectos-about-capitulo6.component';

describe('SpradmProyectosAboutCapitulo6Component', () => {
  let component: SpradmProyectosAboutCapitulo6Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
