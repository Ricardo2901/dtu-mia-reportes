import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo11Component } from './spradm-proyectos-about-capitulo11.component';

describe('SpradmProyectosAboutCapitulo11Component', () => {
  let component: SpradmProyectosAboutCapitulo11Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
