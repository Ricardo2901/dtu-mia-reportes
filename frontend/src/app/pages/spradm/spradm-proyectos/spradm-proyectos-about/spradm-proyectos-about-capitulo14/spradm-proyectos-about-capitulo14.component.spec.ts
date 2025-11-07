import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo14Component } from './spradm-proyectos-about-capitulo14.component';

describe('SpradmProyectosAboutCapitulo14Component', () => {
  let component: SpradmProyectosAboutCapitulo14Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
