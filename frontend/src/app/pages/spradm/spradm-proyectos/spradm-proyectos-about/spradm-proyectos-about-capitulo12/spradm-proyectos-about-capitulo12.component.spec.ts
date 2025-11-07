import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo12Component } from './spradm-proyectos-about-capitulo12.component';

describe('SpradmProyectosAboutCapitulo12Component', () => {
  let component: SpradmProyectosAboutCapitulo12Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
