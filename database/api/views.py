"""
    ===========================================================================================================================================================
        Importaciones de los Documentos Word
    ===========================================================================================================================================================
"""
from .indice import generar_word

"""
    ===========================================================================================================================================================
        Documentacion de Django
    ===========================================================================================================================================================
"""
import hashlib
from rest_framework import viewsets
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from datetime import datetime
from django.utils import timezone
from rest_framework.permissions import AllowAny

"""
    ===========================================================================================================================================================
        Modelos
    ===========================================================================================================================================================
"""
from .models import Climas
from .models import Temperatura
from .models import Users
from .models import Projects
from .models import PrivateFiles

"""
    ===========================================================================================================================================================
        Serializadores
    ===========================================================================================================================================================
"""
from .serializers import ClimasSerializer
from .serializers import TemperaturaSerializer
from .serializers import UsuariosSerializer
from .serializers import ProjectsSerializer
from .serializers import PrivateFilesSerializer

"""
    ===========================================================================================================================================================
        Vistas
    ===========================================================================================================================================================
"""

"""
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        Vistas Tecnicas
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
"""

"""
    ####################################
        Vistas de Tablas en los Capitulos
    ####################################
"""
class ClimasViewSet(viewsets.ModelViewSet):
    queryset = Climas.objects.all()
    serializer_class = ClimasSerializer

class TemperaturaViewSet(viewsets.ModelViewSet):
    queryset = Temperatura.objects.all()
    serializer_class = TemperaturaSerializer

"""
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        CRUD (Create, Read, Update, Delete) de: Proyectos
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
"""

"""
    ####################################
        Vistas de los Proyectos
    ####################################
"""
class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

"""
    ####################################
        Generar y Descargar: Documento Word (.docx)
    ####################################
"""
class GenerateDocx(APIView):
    def post(self, request):
        datos = request.data  # 👈 Recibimos JSON del frontend
        buffer = generar_word(datos)

        # Si el usuario quiere descargar
        if request.query_params.get("descargar", "true") == "true":
            response = HttpResponse(
                buffer.getvalue(),
                content_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            )
            response["Content-Disposition"] = 'attachment; filename="usuario.docx"'
            return response

        # Si solo quieres confirmación y no descargar
        return Response({"mensaje": "Documento generado con éxito"})

"""
    ####################################
        Crear: Proyectos
    ####################################
"""
class RegisterTestProject(APIView):
    def post(self, request):
        tipo_proyecto = request.data.get('tipo_proyecto')
        estacion = request.data.get('estacion')
        nom_micro = request.data.get('microcuenca')
        proyecto_name = request.data.get('nombre_proyecto')
        # created_at = request.data.get('created_at')
        # updated_at = request.data.get('updated_at')
        
        if not tipo_proyecto or not estacion or not nom_micro or not proyecto_name:
            print("Faltan datos o no se puede crear el proyecto")
            return Response({'error': 'Faltan datos'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Crear usuario
        proyecto = Projects.objects.create(
            tipo_proyecto=tipo_proyecto, 
            estacion=estacion,
            nom_micro=nom_micro,
            proyecto_name=proyecto_name,
        )
        serializer = UsuariosSerializer(proyecto)
        print(Response(serializer.data), "Proyecto creado correctamente")
        return Response(serializer.data, status=status.HTTP_201_CREATED)

"""
    ####################################
        Actualizar: Proyectos
    ####################################
"""
class UpdateProject(APIView):
    def put(self, request, pk):
        try:
            proyecto = Projects.objects.get(pk=pk)
        except Projects.DoesNotExist:
            return Response({'error': 'Proyecto no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
        id = proyecto.id
        id_proyecto = request.data.get('id_proyecto', proyecto.id_proyecto)
        tipo_proyecto = request.data.get('tipo_proyecto', proyecto.tipo_proyecto)
        estacion = request.data.get('estacion', proyecto.estacion)
        nom_micro = request.data.get('nom_micro', proyecto.nom_micro)
        storage = request.data.get('storage', proyecto.storage)

        if Projects.objects.exclude(id=id).filter(id_proyecto=id_proyecto).exists():
            return Response({'error': 'Ese ID de proyecto ya está en uso por otro proyecto'}, 
                            status=status.HTTP_400_BAD_REQUEST)

        proyecto.id_proyecto = id_proyecto
        proyecto.tipo_proyecto = tipo_proyecto
        proyecto.estacion = estacion
        proyecto.nom_micro = nom_micro
        proyecto.storage = storage
        proyecto.save()

        serializer = ProjectsSerializer(proyecto)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
"""
    ####################################
        Eliminar: Proyectos
    ####################################
"""
class DeleteProject(APIView):
    def delete(self, request, pk):
        try:
            proyecto = Projects.objects.get(pk=pk)
        except Projects.DoesNotExist:
            return Response({'error': 'Proyecto no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
        # Eliminar proyecto
        proyecto.delete()
        return Response({'message': 'Proyecto eliminado correctamente'}, status=status.HTTP_200_OK)

"""
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        CRUD (Create, Read, Update, Delete) de: Usuarios | Administradores | Superusuarios
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
"""

"""
    ####################################
        Vistas de: Usuarios | Administradores | Superusuarios
    ####################################
"""

class SuperAdminViewSet(viewsets.ModelViewSet):
    serializer_class = UsuariosSerializer
    def get_queryset(self):
        return Users.objects.filter(type_user='Superusuario')

class AdministradorViewSet(viewsets.ModelViewSet):
    serializer_class = UsuariosSerializer
    def get_queryset(self):
        return Users.objects.filter(type_user='Administrador')
    
class UsuariosViewSet(viewsets.ModelViewSet):
    serializer_class = UsuariosSerializer
    def get_queryset(self):
        return Users.objects.filter(type_user='Usuario')

class UsuarioList(viewsets.ReadOnlyModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsuariosSerializer
    permission_classes = [IsAuthenticated]

"""
    ####################################
        Crear: Usuarios | Administradores | Superusuarios
    ####################################
"""
class RegisterTestUser(APIView):
    def post(self, request):
        username = request.data.get('username')
        name = request.data.get('name')
        email = request.data.get('email')
        #email_verified_at = request.data.get('email_verified_at')
        password = request.data.get('password')
        #created_at = request.data.get('created_at')
        #updated_at = request.data.get('updated_at')
        #last_login = request.data.get('last_login')
        is_active = request.data.get('is_active', 0)  # Por defecto, inactivo
        type_user = request.data.get('type_user', 'User')
        #rol = request.data.get('rol', 'Usuario')
        
        if not username or not password:
            print("Faltan datos o no se puede crear el usuario")
            return Response({'error': 'Faltan datos'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Convertir la contraseña a MD5
        hashed_password = hashlib.md5(password.encode()).hexdigest()
        
        # Crear usuario
        user = Users.objects.create(
            username=username, 
            name=name,
            email=email,
            password=hashed_password,
            is_active=is_active,
            type_user=type_user,
        )
        serializer = UsuariosSerializer(user)
        print(Response(serializer.data), "Usuario creado correctamente")
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
"""
    ####################################
        Actualizar: Usuarios | Administradores | Superusuarios
    ####################################
"""
class UpdateTestUser(APIView):
    def put(self, request, pk):
        try:
            user = Users.objects.get(pk=pk)
        except Users.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
        id = user.id
        username = request.data.get('username', user.username)
        name = request.data.get('name', user.name)
        email = request.data.get('email', user.email)
        password = request.data.get('password', None)
        is_active = request.data.get('is_active', user.is_active)
        type_user = request.data.get('type_user', user.type_user)

        if Users.objects.exclude(id=id).filter(email=email).exists():
            return Response({'error': 'Ese email ya está en uso por otro usuario'}, 
                            status=status.HTTP_400_BAD_REQUEST)

        if password:
            hashed_password = hashlib.md5(password.encode()).hexdigest()
            user.password = hashed_password

        user.username = username
        user.name = name
        user.email = email
        user.is_active = is_active
        user.type_user = type_user
        user.save()

        serializer = UsuariosSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
"""
    ####################################
        Eliminar: Usuarios | Administradores | Superusuarios
    ####################################
"""
class DeleteTestUser(APIView):
    def delete(self, request, pk):
        try:
            user = Users.objects.get(pk=pk)
        except Users.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
        # Eliminar usuario
        user.delete()
        return Response({'message': 'Usuario eliminado correctamente'}, status=status.HTTP_200_OK)

"""
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        Vistas de Autenticacion
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
"""

"""
    ####################################
        Vistas de Login
    ####################################
"""
class LoginPlainView(APIView):
    def post(self, request):
        print("Request data:", request.data)
        username = request.data.get('username')
        password = request.data.get('password')
        #hashed_pass = hashlib.md5(password.encode()).hexdigest()
        print("Username:", username, "Hashed password:", password)
        try:
            user = Users.objects.get(username=username, password=password)
            serializer = UsuariosSerializer(user)
            return Response(serializer.data)
        except Users.DoesNotExist:
            print("No se encontró usuario con esas credenciales")
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

"""
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        Vistas de Archivos Privados (solo se pueden ver si estas logueado)
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
"""

"""
    ####################################
        Ver: Archivos Privados
    ####################################
"""
class PrivateFilesViewSet(APIView):
    permission_classes = [AllowAny]  # igual que en UploadPrivateFile

    def get(self, request, username):
        private_files = PrivateFiles.objects.filter(username=username)
        serializer = PrivateFilesSerializer(private_files, many=True)
        return Response(serializer.data)

"""
    ####################################
        Subir o Cargar: Archivos Privados
    ####################################
"""
class UploadPrivateFile(APIView):
    permission_classes = [AllowAny]  # Sin autenticación

    MAX_FILES_PER_USER = 15
    
    def post(self, request):
        archivo = request.FILES.get('file')
        username = request.data.get('username')  # se envía desde Angular

        if not archivo or not username:
            return Response({'error': 'No se ha proporcionado ningún archivo.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Contar archivos existentes del usuario
        current_count = PrivateFiles.objects.filter(username=username).count()
        if current_count >= self.MAX_FILES_PER_USER:
            return Response({'error': f'Solo puedes subir {self.MAX_FILES_PER_USER} archivos.'}, status=403)
        
        documento = PrivateFiles.objects.create(
            name=archivo.name,
            path=archivo,
            format=archivo.name.split('.')[-1],
            size=str(f"{archivo.size / (1024 * 1024):.2f} MB"),  # Tamaño en MB
            username=username,
            # created_at=timezone.now()
        )

        serializer = PrivateFilesSerializer(documento)
        print(f'Archivo {archivo.name} subido por: {request.user.username}')
        return Response(serializer.data, status=status.HTTP_201_CREATED)

"""
    ####################################
        Eliminar: Archivos Privados
    ####################################
"""
class DeletePrivateFile(APIView):
    permission_classes = [AllowAny]

    def delete(self, request, pk):
        try:
            documento = PrivateFiles.objects.get(pk=pk)
        except PrivateFiles.DoesNotExist:
            return Response(
                {'error': 'Archivo no encontrado.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Eliminar archivo físico
        documento.path.delete(save=False)  
        # Eliminar registro en BD
        documento.delete()       

        return Response({'message': 'Archivo eliminado correctamente.'}, status=status.HTTP_204_NO_CONTENT)

