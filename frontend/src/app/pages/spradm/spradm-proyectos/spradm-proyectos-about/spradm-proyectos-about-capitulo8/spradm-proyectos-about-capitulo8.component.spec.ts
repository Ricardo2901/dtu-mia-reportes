import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo8Component } from './spradm-proyectos-about-capitulo8.component';

describe('SpradmProyectosAboutCapitulo8Component', () => {
  let component: SpradmProyectosAboutCapitulo8Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
