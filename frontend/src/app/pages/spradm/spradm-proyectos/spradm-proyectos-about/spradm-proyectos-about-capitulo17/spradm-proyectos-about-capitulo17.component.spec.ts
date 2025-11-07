import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo17Component } from './spradm-proyectos-about-capitulo17.component';

describe('SpradmProyectosAboutCapitulo17Component', () => {
  let component: SpradmProyectosAboutCapitulo17Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
