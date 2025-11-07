from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClimasViewSet
from .views import TemperaturaViewSet
from .views import UsuarioList
from .views import GenerateDocx
from .views import LoginPlainView, RegisterTestUser
from .views import UsuariosViewSet, AdministradorViewSet, SuperAdminViewSet, ProjectsViewSet
from .views import UpdateTestUser, DeleteTestUser
from .views import UploadPrivateFile, PrivateFilesViewSet, DeletePrivateFile

"""
    ===========================================================================================================================================================
        Rutas de la API (Muestran las vistas de los modelos de la base de datos y se las transmiten a Angular)
    ===========================================================================================================================================================
"""

router = DefaultRouter()
router.register(r'climas', ClimasViewSet)
router.register(r'temperatura', TemperaturaViewSet)
router.register(r'usuarios', UsuarioList, basename='usuarios-list')
router.register(r'benutzername', UsuariosViewSet, basename='benutzername-list')
router.register(r'administrator', AdministradorViewSet, basename='administratores-list')
router.register(r'root-benutzername', SuperAdminViewSet, basename='root-benutzername-list')
router.register(r'projects', ProjectsViewSet, basename='projects-list')

"""
    ===========================================================================================================================================================
        Rutas de la API (Muestran las vistas que Angular va a solicitar para loguear, crear, actualizar y eliminar usuarios)
    ===========================================================================================================================================================
"""

urlpatterns = [
    path('', include(router.urls)),

    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    #   Login con nombre de usuario y contraseña
    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    path('login_plain/', LoginPlainView.as_view(), name='login_plain'),


    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    #   Vistas del CRUD (Create, Read, Update, Delete) de los usuarios
    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    path('register_test_user/', RegisterTestUser.as_view(), name='register-test-user'),
    path('update_test_user/<int:pk>/', UpdateTestUser.as_view(), name='update-test-user'),
    path('delete_test_user/<int:pk>/', DeleteTestUser.as_view(), name='delete-test-user'),


    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    #   Vistas del CRUD (Create, Read, Update, Delete) de los proyectos
    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    

    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    #   Vista para generar y descargar el documento en Word (.docx)
    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    path('docx/', GenerateDocx.as_view(), name='generate_docx'),

    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    #   Vistas del CRUD (Create, Read, Update, Delete) de los archivos privados
    # ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    path('upload_private_files/', UploadPrivateFile.as_view(), name='upload_private_files'),
    path('private_files/<str:username>/', PrivateFilesViewSet.as_view(), name='private_files'),
    path('delete_private_files/<int:pk>/', DeletePrivateFile.as_view(), name='delete_private_file'),
]