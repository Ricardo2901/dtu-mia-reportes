import os
from docx import Document

from capitulo1 import capitulo1
from capitulo2 import capitulo2
from capitulo3 import capitulo3
from capitulo4 import capitulo4
from capitulo5 import capitulo5
from capitulo6 import capitulo6
from capitulo7 import capitulo7
from capitulo8 import capitulo8
from capitulo9 import capitulo9
from capitulo10 import capitulo10
from capitulo11 import capitulo11
from capitulo12 import capitulo12
from capitulo13 import capitulo13
from capitulo14 import capitulo14
from capitulo15 import capitulo15
from capitulo16 import capitulo16
from capitulo17 import capitulo17

def generar_clave(nombre_proyecto, base_dir="proyectos_guardados"):
    # Tomar primeras letras de cada palabra en mayúscula
    siglas = "".join(p[0] for p in nombre_proyecto.split()).upper()

    # Revisar cuántas carpetas existen ya con esas siglas
    ruta_siglas = os.path.join(base_dir, nombre_proyecto)
    os.makedirs(ruta_siglas, exist_ok=True)

    contador = 1
    while True:
        clave = f"{siglas}-{contador}"
        ruta_clave = os.path.join(ruta_siglas, clave)
        if not os.path.exists(ruta_clave):
            return clave  # devolvemos clave disponible
        contador += 1


def crear_capitulos_proyecto(nombre_proyecto):
    print(f"📂 Generando proyecto: {nombre_proyecto}...")

    base_dir = "proyectos_guardados"
    clave = generar_clave(nombre_proyecto, base_dir)
    ruta_proyecto = os.path.join(base_dir, nombre_proyecto, clave)
    os.makedirs(ruta_proyecto, exist_ok=True)

    # Llamadas a capítulos: cada uno guarda su propio archivo
    # capitulo1(nombre_proyecto, ruta_proyecto)
    # capitulo2(nombre_proyecto, ruta_proyecto)
    # capitulo3(nombre_proyecto, ruta_proyecto)
    # capitulo4(nombre_proyecto, ruta_proyecto)
    # capitulo5(nombre_proyecto, ruta_proyecto)
    # capitulo6(nombre_proyecto, ruta_proyecto)
    # capitulo7(nombre_proyecto, ruta_proyecto)
    # capitulo8(nombre_proyecto, ruta_proyecto)
    capitulo9(nombre_proyecto, ruta_proyecto)
    capitulo10(nombre_proyecto, ruta_proyecto)
    # ...
    # capitulo15(nombre_proyecto, ruta_proyecto)
    # capitulo16(nombre_proyecto, ruta_proyecto)
    # capitulo17(nombre_proyecto, ruta_proyecto)  # referencias

if __name__ == "__main__":
    nombre_proyecto = input("\n¿Qué tipo de proyecto deseas generar? ").strip().upper()
    #estacion = input("\nEscribe el numero de estacion: ").strip()
    #numero_micro = input("\nEscribe el numero de micro: ").strip()
    crear_capitulos_proyecto(nombre_proyecto)
