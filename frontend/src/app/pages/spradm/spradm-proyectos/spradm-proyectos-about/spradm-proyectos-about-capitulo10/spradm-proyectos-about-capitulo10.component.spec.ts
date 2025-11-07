import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo10Component } from './spradm-proyectos-about-capitulo10.component';

describe('SpradmProyectosAboutCapitulo10Component', () => {
  let component: SpradmProyectosAboutCapitulo10Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
