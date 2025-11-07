import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo7Component } from './spradm-proyectos-about-capitulo7.component';

describe('SpradmProyectosAboutCapitulo7Component', () => {
  let component: SpradmProyectosAboutCapitulo7Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
