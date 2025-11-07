import mysql.connector
import xml.etree.ElementTree as ET
import json
import yaml
from xml.dom import minidom
import datetime
import pandas as pd

# Conectar a la base de datos
def connect_to_db():
    return mysql.connector.connect(
        host="30.30.8.26",
        user="root",
        password="",
        database="shu2"
    )

# Función para generar un archivo XML de todos los usuarios
def create_xml():
    conn = connect_to_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM teachers")
    users = cursor.fetchall()
    conn.close()

    root = ET.Element("users")
    
    for user in users:
        user_elem = ET.SubElement(root, "user")
        for key, value in user.items():
            elem = ET.SubElement(user_elem, key)
            elem.text = str(value)

    # Crear el árbol XML
    tree = ET.ElementTree(root)
    tree.write("users.xml", encoding='utf-8', xml_declaration=True)

    # Indentar el XML
    indent_xml("users.xml")
    print("Archivo XML creado: teachers.xml")

# Función para indentar el XML
def indent_xml(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        xml_string = file.read()
    pretty_xml_string = minidom.parseString(xml_string).toprettyxml(indent="    ")
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(pretty_xml_string)

# Función para generar un archivo JSON de todos los usuarios
def create_json():
    conn = connect_to_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM teachers")
    users = cursor.fetchall()
    conn.close()

    with open("users.json", "w", encoding='utf-8') as json_file:
        json.dump(users, json_file, ensure_ascii=False, indent=4)

    print("Archivo JSON creado: teachers.json")

# Función para generar un archivo YAML de todos los usuarios
def create_yaml():
    conn = connect_to_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM teachers")
    users = cursor.fetchall()
    conn.close()

    with open("users.yaml", "w", encoding='utf-8') as yaml_file:
        yaml.dump(users, yaml_file, allow_unicode=True)

    print("Archivo YAML creado: teachers.yaml")

# Menú de opciones
def main_menu():
    while True:
        print("\nSeleccione una opción:")
        print("1. Agregar usuario")
        print("2. Ver todos los usuarios")
        print("3. Actualizar usuario")
        print("4. Eliminar usuario")
        print("5. Generar archivo XML")
        print("6. Generar archivo JSON")
        print("7. Generar archivo YAML")
        print("8. Generar archivos XML, JSON y YAML")
        print("9. Salir")

        choice = input("Ingrese el número de la opción: ")

        if choice == '1':
            add_teacher()
        elif choice == '2':
            view_users()
        elif choice == '3':
            update_user()
        elif choice == '4':
            delete_user()
        elif choice == '5':
            create_xml()
        elif choice == '6':
            create_json()
        elif choice == '7':
            create_yaml()
        elif choice == '8':
            create_xml()
            create_json()
            create_yaml()
        elif choice == '9':
            print("Saliendo del programa.")
            break
        else:
            print("Opción no válida. Por favor, intente de nuevo.")

# Funciones de agregar, ver, actualizar y eliminar usuario (mismas que antes)
def add_teacher():
    now_date = datetime.datetime.now()
    update = now_date.strftime("%d/%m/%Y %H:%M:%S")
    worker_id = int(input("Ingrese el numero de empleado: "))
    specially.upper() = input("Ingrese la especialidad: ")
    worker_name = input("Ingrese el nombre del docente: ")
    register_date = update
    update_date = update

    conn = connect_to_db()
    cursor = conn.cursor()
    query = "INSERT INTO teachers (worker_id, specially, worker_name, register_date, update_date) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(query, (worker_id, specially, worker_name, register_date, update_date))

    conn.commit()
    print("Datos de docente agregado exitosamente.")
    conn.close()

    opcion = input("Desea agreagar a un nuevo docente (S / N): ")
    if opcion.upper() == "S":
        add_teacher()
    elif opcion.upper() == "N":
        main_menu()

def view_users():
    conn = connect_to_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM teachers")
    teachers = cursor.fetchall()
    conn.close()
    if teachers:
        df = pd.DataFrame(teachers)
        df.columns = ["ID", "Numero de empleado", "Especialidad", "Nombre", "Fecha de registro", "Fecha de actualizacion"]
        print(df.to_string(index=False))
    else:
        print("No hay docentes registrados.")

def update_user():
    now_date = datetime.datetime.now()
    update = now_date.strftime("%d/%m/%Y %H:%M:%S")
    worker_id = int(input("Ingrese el numero de empleado a actualizar: "))

    conn1 = connect_to_db()
    cursor1 = conn1.cursor(dictionary=True)
    cursor1.execute("SELECT * FROM teachers WHERE worker_id = %s", (worker_id,))
    teacher = cursor1.fetchone()
    conn1.close()

    if teacher:
        specially = input("Ingrese la nueva especialidad (o presione Enter para no cambiar): ")
        worker_name = input("Ingrese el nuevo docente a actualizar (o presione Enter para no cambiar): ")
        update_date = update

        conn = connect_to_db()
        cursor = conn.cursor()
        
        updates = []
        values = []
        if worker_id:
            updates.append("worker_id = %s")
            values.append(int(worker_id))
        if specially:
            updates.append("specially = %s")
            values.append(specially)
        if worker_name:
            updates.append("worker_name = %s")
            values.append(worker_name)
        if update_date:
            updates.append("update_date = %s")
            values.append(update_date)

        values.append(worker_id)
        query = f"UPDATE teachers SET {', '.join(updates)} WHERE worker_id = %s"
        cursor.execute(query, tuple(values))
        conn.commit()
        print("Datos del docente actualizados exitosamente.")
        conn.close()

        print("")
        opcion = input("Desea hacer otra actualizacion (S / N): ")
        if opcion.upper() == "S":
            update_user()
        elif opcion.upper() == "N":
            main_menu()

    else:
        print("No hay docentes registrados con el numero " + str(worker_id) + ".")
        main_menu()

def delete_user():
    worker_id = int(input("Ingrese el numero de empleado a eliminar: "))
    conn1 = connect_to_db()
    cursor1 = conn1.cursor(dictionary=True)
    cursor1.execute("SELECT * FROM teachers WHERE worker_id = %s", (worker_id,))
    teacher = cursor1.fetchone()
    conn1.close()

    if teacher:
        conn = connect_to_db()
        cursor = conn.cursor()
        query = "DELETE FROM teachers WHERE worker_id = %s"
        cursor.execute(query, (worker_id,))
        conn.commit()
        print("Usuario eliminado exitosamente.")
        conn.close()

        print("")
        opcion = input("Desea eliminar otro docente (S / N): ")
        if opcion.upper() == "S":
            delete_user()
        elif opcion.upper() == "N":
            main_menu()

    else:
        print("No hay docentes registrados con el numero " + str(worker_id) + ".")
        print("Favor de volver a intentarlo")
        print("")
        delete_user()

# Ejecución del menú principal
if __name__ == "__main__":
    main_menu()
