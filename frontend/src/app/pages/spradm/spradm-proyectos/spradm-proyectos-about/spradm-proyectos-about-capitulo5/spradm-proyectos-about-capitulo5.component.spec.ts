import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo5Component } from './spradm-proyectos-about-capitulo5.component';

describe('SpradmProyectosAboutCapitulo5Component', () => {
  let component: SpradmProyectosAboutCapitulo5Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
