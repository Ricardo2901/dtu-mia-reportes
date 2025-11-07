import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo1Component } from './spradm-proyectos-about-capitulo1.component';

describe('SpradmProyectosAboutCapitulo1Component', () => {
  let component: SpradmProyectosAboutCapitulo1Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
